Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({});
	}
});

Template.expenses_today.events({

	'click #addNewExpense': function(event, template) {

		event.preventDefault();

		$('#addNewExpenseOverlay').removeClass('animated fadeOut');
		$('#expenses_today_overlay').addClass('animated fadeOut');
		$("#addNewExpenseOverlay").css({
			'display': 'block'
		});
		$('#addNewExpenseOverlay').addClass('animated fadeIn');
		
		
	},

	'click #closeAddNewExpense': function(event, template) {

		$('#addNewExpenseOverlay').removeClass('animated fadeIn');
		$('#addNewExpenseOverlay').addClass('animated fadeOut');
		$("#addNewExpenseOverlay").css({
			'display': 'none'
		});
		$('#expenses_today_overlay').removeClass('animated fadeOut');
		$('#expenses_today_overlay').addClass('animated fadeIn');

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
		

	}
})