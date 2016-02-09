var id;

Template.playlist.onCreated(function(){
  var self = this;
  id = FlowRouter.getParam('id');
  self.autorun(function(){
    self.subscribe('playlist', id);
  });
});

Template.playlist.helpers({
  playlist: () => {
      return Playlists.findOne({});
  }
});

Template.playlistItem.onCreated(function() {
    idPlaylist = FlowRouter.getParam('id');
    this.detailView = new ReactiveVar(false);
});

Template.playlistItem.events({
  'click .chapter-header': function(event, template) {
    template.detailView.set(!template.detailView.get());
  }
});

Template.playlistItem.helpers({
    detailView: function() {
        return Template.instance().detailView.get();
    },
    playlistId: function() {
        return id;
    }
});
