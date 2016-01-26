Meteor.publish('chapters', function(){
  return Chapters.find({});
});

Meteor.publish('chapter', function(id){
  check(id,String);
  return Chapters.find({_id: id});
});
