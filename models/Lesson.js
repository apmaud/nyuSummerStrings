const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LessonSchema = new Schema({

});

LockerSchema.virtual("url").get(function () {
    return `/catalog/lesson/${this._id}`;
});

module.exports = mongoose.model("Lesson", LessonSchema);