Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({});
	}
})