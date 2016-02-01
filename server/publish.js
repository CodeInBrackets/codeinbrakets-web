Meteor.publish('chapters', function(){
  return Chapters.find({});
});

Meteor.publish('playlists', function(){
  return Playlists.find({});
});

Meteor.publish('chapter', function(id){
  check(id,String);
  return Chapters.find({_id: id});
});

Meteor.publish('playlist', function(id){
  check(id,String);
  return Playlists.find({_id: id});
});
