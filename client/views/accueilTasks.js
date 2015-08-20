Session.setDefault('editing_itemname', null);
var activateInput = function (input) {
  input.focus();
  input.select();
}
Template.accueilTasks.helpers({
  	


  daybefore:  function () {
    var yesterday = Session.get('realDate');
    yesterday.setTime(yesterday.getTime()- 24 * 3600 * 1000);
    var months = {'0':'Jan', '1':'Feb', '2':'Mar', '3':'Apr', '4':'May','5':'Jun', '6':'July', '7':'Aug', '8':'Sept', '9':'Oct', '10':'Nov', '11':'Dec'};

    var yesterday1 = yesterday.getDate()+'/'+months[yesterday.getMonth()]+'/'+yesterday.getFullYear();


    return yesterday1;  

 
  },
  dayafter:  function () {
  var tomorrow = Session.get('realDate');
  tomorrow.setTime(tomorrow.getTime()+ 24 * 3600 * 1000);
		var months = {'0':'Jan', '1':'Feb', '2':'Mar', '3':'Apr', '4':'May','5':'Jun', '6':'July', '7':'Aug', '8':'Sept', '9':'Oct', '10':'Nov', '11':'Dec'};
    
  var tomorrow1 = tomorrow.getDate()+'/'+months[tomorrow.getMonth()]+'/'+tomorrow.getFullYear();
  return tomorrow1;
  },
	
	
	
	today: function() {
    
	
    return Session.get('viewDate');
    
    
	},
  
  advancement: function() {
    var nbTaskDone = Tasks.find({doneTask:true, submittedRealDate: Session.get('viewDate') }).count();
    var nbTask = Tasks.find({submittedRealDate: Session.get('viewDate') }).count();
    return nbTaskDone/nbTask * 100; 
  },
  tasks: function() {
    var thedate =  Session.get('viewDate');	
			return Tasks.find({submittedRealDate: thedate, backlogTask: false}  );
  }

	

	
});  	
	
Template.accueilTasks.events ({
	 'keypress .taskClass': function(e, template) {
    //e.preventDefault();
    if (e.which === 13) {
      var url = template.find(".taskClass").value;
      
      var creaDate = Session.get('viewDate');
       //var creaDate2 = new Date();
      var newTask = {
        textTask: url,
        doneTask: false,
			  backlogTask : false,
        userId : Meteor.user()._id,
        author: Meteor.user().emails.adress,
        submitted: new Date().getTime(),
        modifiedStatus: new Date().getTime(),
        submittedRealDate : creaDate
        
      };
      newTask._id = Tasks.insert(newTask);
      
    }}
	 

   
   
  
  
});  

