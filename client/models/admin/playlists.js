Template.Playlists.events({
  'click .toggle-menu': function() {
    Meteor.call('togglePlaylistPublish', this._id, this.isPublic);
  },
  'click .fa-trash': function() {
    Meteor.call('deletePlaylist', this._id);
  },
  'click .fa-pencil': function(event, template) {
    template.editMode.set(!template.editMode.get());
  }
});

Template.Playlists.helpers({
  updatePlaylistId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});
