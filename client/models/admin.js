Template.admin.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('playlists');
    self.subscribe('chapters');
  });
});
