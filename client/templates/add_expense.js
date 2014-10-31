Template.addExpense.events({
	'submit #addNewExpenseForm': function(event, template) {
		event.preventDefault();
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
		Router.go('/');

	}
})