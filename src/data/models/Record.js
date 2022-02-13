const mongoose = require("mongoose");
const { Schema } = mongoose;

const recordSchema = new Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  counts: {
    type: [Number],
  },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
