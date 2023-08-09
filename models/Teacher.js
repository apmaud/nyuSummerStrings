const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    instrument: { type: Schema.Types.ObjectId, ref: "Instrument"},
    student: [{ type: Schema.Types.ObjectId, ref: "Student"}],
    locker: { type: Schema.Types.ObjectId, ref: "Locker"}

});

AuthorSchema.virtual("url").get(function () {
    return `/catalog/teacher/${this._id}`;
});

module.exports = mongoose.model("Teacher", TeacherSchema);