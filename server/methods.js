Meteor.methods({
  togglePlaylistPublish: function(id, currentState){
    Playlists.update(id, {
      $set:{
        isPublic: !currentState
      }
    })
  },
  deletePlaylist: function(id){
    Playlists.remove(id);
  }
});
