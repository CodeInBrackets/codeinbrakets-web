Meteor.publish('playlists', function(){
  return Playlists.find({});
});

Meteor.publish('publishedPlaylists', function(){
  return Playlists.find({isPublic: true});
});

Meteor.publish('playlist', function(id){
  check(id,String);
  return Playlists.find({_id: id, isPublic: true});
});

Meteor.publish('chapter', function(id, name){
  check(id,String);
  check(name,String);
  return Playlists.find({_id: id, isPublic: true}, {fields: {chapters: { $elemMatch: {name: name }}}});
});
