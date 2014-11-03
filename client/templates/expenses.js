var subscriptionHandler = false;
function handleExpenses(time) {
	expensesHandler = Meteor.subscribe('expenses', time);
	if(subscriptionHandler)
		subscriptionHandler.stop();
	subscriptionHandler = expensesHandler;
}

function clearAddExpenseFields() {
	// Clear Fields
	$('#title').val('');
	$('#cost').val('');
	$('#location').val('');
	$('input[name=category]').attr('checked', false);
}

Template.expenses.helpers({
	expenses: function() {
		return Expenses.find({}, {sort: {date: -1}});
	},
	expensesToday: function() {
			var expenses = Expenses.find({});
			var expensesToday = 0;
			expenses.forEach(function(expense) {
				var todaysDate = new Date();
				if(expense.date.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
					expensesToday += parseInt(expense.cost);
				}
			});
			console.log(expensesToday);
			return expensesToday.toFixed(2);
	},
	expensesThisWeek: function() {
		handleExpenses('weekly');
		return Expenses.find({}).count();
	},
	expensesThisMonth: function() {
		handleExpenses('monthly');
		console.log(Expenses.find({}).count());
	},
	dailyAllowance: function() {
			return parseInt("25").toFixed(2);
	}
});

Template.expenses.events({

	'click #addNewExpense': function(event, template) {

		event.preventDefault();
		
		$("#addNewExpenseOverlay").addClass("open");
		$("#expenses_today_overlay").addClass("overlay-open");
		
		
	},

	'click #closeAddNewExpense': function(event, template) {

			

			$("#addNewExpenseOverlay").removeClass("open");
			$("#expenses_today_overlay").removeClass("overlay-open");
			$("#addNewExpenseOverlay").addClass("close");
			$("#addNewExpenseOverlay").removeClass("close");
			
			clearAddExpenseFields();

	},

	'submit #addNewExpenseForm': function(event, template) {
		event.preventDefault();
		console.log("Saving Form...");
		var title = event.target.title.value,
			cost  = event.target.cost.value,
			location = event.target.location.value,
			category = event.target.category.value,
			date = new Date();
			
		Expenses.insert({
			title: title,
			cost: parseInt(cost).toFixed(2),
			location: location,
			category: category,
			date: date
		});

		$("#addNewExpenseOverlay").removeClass("open");
		$("#expenses_today_overlay").removeClass("overlay-open");
		$("#addNewExpenseOverlay").addClass("close");
		$("#addNewExpenseOverlay").removeClass("close");
		
		clearAddExpenseFields();

	},
	
	'click #expensesToday': function(event, template) {
		console.log("Expenses Today");
		event.preventDefault();
		$('li').removeClass('active');
		$(event.target).parent().addClass('active');
		handleExpenses('daily');
	},

	'click #expensesThisWeek':function(event, template) {
		console.log("Weekly Expenses");
		event.preventDefault();
		$('li').removeClass('active');
		$(event.target).parent().addClass('active');
		handleExpenses('weekly');
	},
	
	'click #expensesThisMonth': function(event, template) {
		console.log("Expenses This Month");
		event.preventDefault();
		$('li').removeClass('active');
		$(event.target).parent().addClass('active');
		handleExpenses('monthly');
	}
})