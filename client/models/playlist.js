Template.playlist.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('playlist', id);
  });
});

Template.playlist.helpers({
  playlist: () => {
      return Playlists.findOne({});
    }
});
