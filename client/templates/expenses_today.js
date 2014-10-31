Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({}, {date: -1});
	},
	totalExpenseToday: function() {
		return 18;
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
			date = Date.parse(new Date());
			
		Expenses.insert({
			title: title,
			cost: cost,
			location: location,
			category: category,
			date: date
		});
	}
})