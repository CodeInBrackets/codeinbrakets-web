Meteor.startup(function () {
  if(!Meteor.users.find().count()) {
    var options = {
      username: 'admin',
      password: 'admin-pass', 
      email: 'admin@example.com'
    };
    Accounts.createUser(options);
  }
});
