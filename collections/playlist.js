/*Playlists = new Mongo.Collection('playlists');

Playlists.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

PlaylistSchema = new SimpleSchema({
    chapters: {
        type: [Chapters.schema],
        label: "Chapters"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
          return new Date();
        },
        autoform:{
          type: "hidden"
        }
    },
    isPublic: {
        type: Boolean,
        defaultValue: true,
        optional: true,
        autoform:{
          type: "hidden"
        }
    }
});

Playlists.attachSchema(PlaylistSchema);
*/
