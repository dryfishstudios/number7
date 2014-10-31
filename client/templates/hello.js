Template.hello.helpers({
	expenses: function() {
		return Expenses.find({});
	}
})