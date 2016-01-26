Template.chapter.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('chapter', id);
  });
});

Template.chapter.helpers({
  chapter: () => {
    var id = FlowRouter.getParam('id');
    return Chapters.findOne({_id: id});
  }
});
