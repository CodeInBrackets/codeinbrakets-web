Template.publishedPlaylists.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('publishedPlaylists');
  });
});

Template.publishedPlaylists.helpers({
  playlists: () => {
    return Playlists.find({});
  }
});
