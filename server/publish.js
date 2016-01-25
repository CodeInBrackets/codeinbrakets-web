Meteor.publish('chapter', function(id){
  check(id,String);
  return Videos.find({_id: id});
});
