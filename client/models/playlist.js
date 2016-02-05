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

Template.PlaylistItem.onCreated(function() {
  this.detailView = new ReactiveVar(false);
});

Template.PlaylistItem.events({
  'click .chapter-header': function(event, template) {
    template.detailView.set(!template.detailView.get());
  }
});

Template.PlaylistItem.helpers({
    detailView: function() {
        return Template.instance().detailView.get();
    },
    playilistid: function() {
        return FlowRouter.getParam('id');
    }
});
