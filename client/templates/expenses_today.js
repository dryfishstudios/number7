Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({}, {sort: {date: -1}});
	},

	expensesByWeek: function() {
		return Expenses.find({});
	}
});

Template.expenses_today.events({

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
			cost: cost,
			location: location,
			category: category,
			date: date
		});

		$("#addNewExpenseOverlay").removeClass("open");
		$("#expenses_today_overlay").removeClass("overlay-open");
		$("#addNewExpenseOverlay").addClass("close");
		$("#addNewExpenseOverlay").removeClass("close");
		

	},

	'click #thisWeekFilter':function(event, template) {
		
		event.preventDefault();
		console.log("Filter by week...");

	}
})