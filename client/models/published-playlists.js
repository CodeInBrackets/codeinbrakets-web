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



Template.publishedPlaylist.onCreated(function() {
  this.detailView = new ReactiveVar(false);
});

Template.publishedPlaylist.events({
  'click .playlist': function(event, template) {
    console.log(template.detailView.get());
    template.detailView.set(!template.detailView.get());
  }
});

Template.publishedPlaylist.helpers({
  detailView: function() {
    return Template.instance().detailView.get();
  }
});
