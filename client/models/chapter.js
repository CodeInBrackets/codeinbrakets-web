Template.chapter.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('playlist', id);
  });
});

Template.chapter.helpers({
  chapters: () => {
    var id = FlowRouter.getParam('id');
    var name = FlowRouter.getParam('name');
    return Playlists.findOne({_id: id, 'chapters.name': name}, {_id: 0, 'chapters.$': 1});
  }
});
