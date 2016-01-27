Chapters = new Mongo.Collection('chapters');

Chapters.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

ExerciseSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    body: {
        type: String,
        label: "Enunciate",
        autoform: {
            rows: 10
         }
    },
    result: {
        type: String,
        label: "Result"
    }
});

VideoSchema = new SimpleSchema({
    url: {
        type: String,
        label: "URL"
    }
});

ChapterSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    content: {
        type: String,
        label: "Content"
    },
    exercises: {
        type: [ExerciseSchema],
        label: "Exercises",
        optional: true
    },
    video: {
        type: VideoSchema,
        label: "Video",
        optional: true
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
