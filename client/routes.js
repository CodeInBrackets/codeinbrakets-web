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

FlowRouter.route('/:id',
{
  name: 'playlist',
  action(){
    BlazeLayout.render('main', {main: 'playlist'});
  }
});

FlowRouter.route('/:id/:name',
{
  name: 'chapter',
  action(){
    BlazeLayout.render('main', {main: 'chapter'});
  }
});
