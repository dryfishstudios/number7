if(!Expenses.find({}).count()) {
    	var title = 'DummyExpense';
		var cost = 50;
		var location = 'TheMall';
		var category = 'Malls';
		Expenses.insert({title: title, cost: cost, location: location, category: category});
    }
if(!Categories.find({}).count()) {
		var name = 'Malls';
		Categories.insert({name: name});
}