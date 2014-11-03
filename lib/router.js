Router.configure({

	layoutTemplate: 'application'

});

Router.route('/', function() {
	this.render('expenses');
});

Router.route('/add', function() {
	this.render('addExpense');
});

