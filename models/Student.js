const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date, required: true },
    age: { type: Number, required: true },
    instrument: { type: Schema.Types.ObjectId, ref: "Instrument"},
    teacher: [{ type: Schema.Types.ObjectId, ref: "Teacher"}],
    locker: { type: Schema.Types.ObjectId, ref: "Locker"}

});

AuthorSchema.virtual("url").get(function () {
    return `/catalog/student/${this._id}`;
});

module.exports = mongoose.model("Student", StudentSchema);