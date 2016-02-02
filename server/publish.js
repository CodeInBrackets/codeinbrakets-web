Meteor.publish('playlists', function(){
  return Playlists.find({});
});

Meteor.publish('playlist', function(id){
  check(id,String);
  return Playlists.find({_id: id});
});
