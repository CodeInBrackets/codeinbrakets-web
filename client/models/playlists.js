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
