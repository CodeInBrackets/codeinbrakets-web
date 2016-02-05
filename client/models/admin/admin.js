Template.admin.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('playlists');
  });
});

Template.admin.helpers({
  playlists: () => {
    return Playlists.find({});
  }
});

Template.admin.events({
  'click .new-playlist': () => {
    Session.set('ShowNewPlaylist', true);
  }
});

Template.admin.helpers({
  updatePlaylistId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});
