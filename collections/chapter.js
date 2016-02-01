Chapters = new Mongo.Collection('chapters');

Chapters.allow({
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
    url: {
        type: VideoSchema,
        label: "Video"
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

Chapters.attachSchema(ChapterSchema);

Playlists = new Mongo.Collection('playlists');

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
        type: [Chapters],
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
