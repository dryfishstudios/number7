Template.expenses_today.helpers({
	expenses: function() {
		return Expenses.find({});
	}
});

Template.expenses_today.events({

	'click #addNewExpense': function(event, template) {

		event.preventDefault();

		console.log("clicked add new expense");
	}
})