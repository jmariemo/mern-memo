const { Schema, model } = require("mongoose");
const dateFormat = require("mongoose-date-format");

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

eventSchema.plugin(dateFormat);

const Event = model("Event", eventSchema);

module.exports = Event;
