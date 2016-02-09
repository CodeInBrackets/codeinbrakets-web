Accounts.onLogout(function(){
  FlowRouter.go('home');
});

FlowRouter.route('/',
{
  name: 'home',
  action(){
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/admin',
{
  name: 'admin',
  action(){
    if(!Meteor.userId()){
      FlowRouter.go('home');
    }
    BlazeLayout.render('main', {main: 'admin'});
  }
});

FlowRouter.route('/playlists',
{
  name: 'playlists',
  action(){
    BlazeLayout.render('main', {main: 'publishedPlaylists'});
  }
});

FlowRouter.route('/playlist/:id',
{
  name: 'playlist',
  action(){
    BlazeLayout.render('main', {main: 'playlist'});
  }
});

FlowRouter.route('/chapter/:id/:name',
{
  name: 'chapter',
  action(){
    BlazeLayout.render('main', {main: 'chapter'});
  }
});
