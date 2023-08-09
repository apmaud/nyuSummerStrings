const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LockerSchema = new Schema({
    locker_number: { type: Number, required: true},
    locker_floor: { type: Number, required: true},
    locker_type: { type: String, required: true},
    instrument: { type: Schema.Types.ObjectId, ref: "Instrument"},
    user: { type: Schema.Types.ObjectId, ref: "Student"}
});

LockerSchema.virtual("url").get(function () {
    return `/catalog/locker/${this._id}`;
});

module.exports = mongoose.model("Locker", LockerSchema);