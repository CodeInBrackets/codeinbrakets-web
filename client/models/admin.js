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

Template.newPlaylist.events({
  'click .fa-close': function() {
    Session.set('ShowNewPlaylist', false);
  }
});

Template.Playlists.onCreated(function() {
  this.editMode = new ReactiveVar(false);
});

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
