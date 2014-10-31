Router.configure({

	layoutTemplate: 'application'

});

Router.route('/', function() {
	this.render('expenses_today');
});

Router.route('/add', function() {
	this.render('addExpense');
});

