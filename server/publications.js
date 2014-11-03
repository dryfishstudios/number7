Meteor.publish('expenses', function(frequency) {
	var today = new Date();
	var month = today.getMonth(); //10
	var year = today.getFullYear(); //2014
	var date = today.getDate(); //3
	var start,end;
	
	function getMonday(d) {
		d = new Date(d);
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6:1);
			console.log(d.setDate(diff));
		return new Date(d.setDate(diff));
	}
	
	if(frequency == 'daily') {
		start = new Date(year, month, date-1, 23, 59, 59);
		end = new Date(year, month, date+1);
		return Expenses.find({ date: { $gt: start, $lt: end}});
	}
	else if(frequency == 'weekly') {
		monday = getMonday(today);
		mondayYear = monday.getFullYear();
		mondayMonth = monday.getMonth();
		mondayDate = monday.getDate();
		start = new Date(monday.setHours(00,00,00));
		end = new Date(mondayYear, mondayMonth, mondayDate + 6)
		return Expenses.find({ date: { $gt: start, $lt: end }});
	}
	else if(frequency == 'monthly') {
		start = new Date(year, month, 1);
		end = new Date(year, month, 31);
		return Expenses.find({ date: { $gt: start, $lt: end}});
	}
})