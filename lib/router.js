Router.configure({

	layoutTemplate: 'application'

});

Router.route('/', function() {
	this.render('hello');
});

