Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({}, {sort: {parsedDate: -1}});
	},
	totalExpensesToday: function() {
		var expenses = Expenses.find({});
		var totalExpensesToday = 0;
		expenses.forEach(function(expense) {
			var todaysDate = new Date();
			if(expense.date.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
				totalExpensesToday += parseInt(expense.cost);
			}
		});
		console.log(totalExpensesToday);
		return totalExpensesToday.toFixed(2);
	},
	dailyAllowance: function() {
		return 25;
	}
});

Template.expenses_today.events({

	'click #addNewExpense': function(event, template) {
		event.preventDefault();
		
		$('#addNewExpenseOverlay').removeClass('animated zoomOut');
		$('#expenses_today_overlay').addClass('animated zoomOut');
		$("#addNewExpenseOverlay").css({
			'display': 'block'
		});
		$('#addNewExpenseOverlay').addClass('animated zoomIn');
	},

	'click #closeAddNewExpense': function(event, template) {

		$('#addNewExpenseOverlay').removeClass('animated zoomIn');
		$('#addNewExpenseOverlay').addClass('animated zoomOut');
		$("#addNewExpenseOverlay").css({
			'display': 'none'
		});
		$('#expenses_today_overlay').removeClass('animated zoomOut');
		$('#expenses_today_overlay').addClass('animated zoomIn');

	},

	'submit #addNewExpenseForm': function(event, template) {
		event.preventDefault();
		console.log("Saving Form...");
		var title = event.target.title.value,
			cost  = event.target.cost.value,
			location = event.target.location.value,
			category = event.target.category.value,
			date = new Date(),
			parsedDate = Date.parse(date);
			
		Expenses.insert({
			title: title,
			cost: cost.toFixed(2),
			location: location,
			category: category,
			date: date,
			parsedDate: parsedDate
		});
		
		$('#addNewExpenseOverlay').removeClass('animated zoomIn');
		$("#addNewExpenseOverlay").css({
			'display': 'none'
		});
		$('#expenses_today_overlay').removeClass('animated zoomOut');
		$('#expenses_today_overlay').addClass('animated zoomIn');
		
		// Clear fields
		$('#title').val('');
		$('#cost').val('');
		$('#location').val('');
		$('#category').val('');
	}
})