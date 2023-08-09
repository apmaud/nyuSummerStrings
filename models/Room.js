const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    locker: { type: Schema.Types.ObjectId, ref: "Locker"},
    room_number: { type: Number, required: true},
    class: [{ type: Schema.Types.ObjectId, ref: "Class"}],
});

AuthorSchema.virtual("url").get(function () {
    return `/room/${this.room_number}`;
});

module.exports = mongoose.model("Room", RoomSchema);