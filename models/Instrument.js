const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstrumentSchema = new Schema({
    instrument_type: {type: String, required: true}
});

InstrumentSchema.virtual("url").get(function () {
    return `/catalog/instrument/${this._id}`;
});

module.exports = mongoose.model("Instrument", InstrumentSchema);