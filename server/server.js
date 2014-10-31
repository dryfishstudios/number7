Meteor.startup(function () {
    if(!Expense.find({}).count()) {
    	var title = 'DummyExpense';
		var cost = 50;
		var location = 'TheMall';
		var category = 'Malls';
		Expense.insert({title: title, cost: cost, location: location, category: category});
    }
	if(!Category.find({}).count()) {
		var name = 'Malls';
		Category.insert({name: name});
	}
});