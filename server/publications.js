Meteor.publish('tasks', function() {
  return Tasks.find();
});

Meteor.startup(function () {
	AccountsEntry.config({
      wrapLinks: true,                   // wraps accounts-entry links in <li> for bootstrap compatability purposes
      homeRoute: '/',                    // MUST BE SET - redirect to this path after sign-out
      dashboardRoute: '/bouyaka' 
    });

  
  
  
  
  
});