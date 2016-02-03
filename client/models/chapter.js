Template.chapter.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    var name = FlowRouter.getParam('name');
    self.subscribe('chapter', id, name);
  });
});

Template.chapter.helpers({
  chapter: () => {
      return Playlists.findOne({}).chapters[0];
    }
});
