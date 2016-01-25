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
    BlazeLayout.render('main', {main: 'admin'});
  }
});

FlowRouter.route('/chapter/:id',
{
  name: 'chapter',
  action(){
    BlazeLayout.render('main', {main: 'chapter'});
  }
});
