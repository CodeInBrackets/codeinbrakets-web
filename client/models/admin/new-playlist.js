Template.newPlaylist.events({
  'click .fa-close': function() {
    Session.set('ShowNewPlaylist', false);
  }
});

Template.Playlists.onCreated(function() {
  this.editMode = new ReactiveVar(false);
});
