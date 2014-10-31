Router.configure({

	layoutTemplate: 'application'

});

Router.route('/', function() {
	this.render('expenses_today');
});

