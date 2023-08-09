const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    class_name: { type: String, required: true},
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
    time: { type: String, required: true }
});

ClassSchema.virtual("url").get(function () {
    return `/catalog/class/${this._id}`;
});

module.exports = mongoose.model("Class", ClassSchema);