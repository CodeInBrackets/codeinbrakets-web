Chapters = new Mongo.Collection('chapters');

ExerciseSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    body: {
        type: String,
        label: "Enunciate"
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
    }
});
