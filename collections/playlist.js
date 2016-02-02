Playlists = new Mongo.Collection('playlists');

Playlists.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

VideoSchema = new SimpleSchema({
    youtube: {
        type: String,
        label: "YoutubeID"
    }
});

ChapterSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description:{
        type: String,
        label: "Description"
    },
    video: {
        type: VideoSchema,
        label: "Video"
    }
});

PlaylistSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description:{
        type: String,
        label: "Description"
    },
    chapters: {
        type: [ChapterSchema],
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
        defaultValue: false,
        autoform:{
          type: "hidden"
        }
    }
});

Playlists.attachSchema(PlaylistSchema);
