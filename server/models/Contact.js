const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const eventSchema = require("./Event");

const contactSchema = new Schema({
  // Profile that the contact belongs to
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  // Name of Contact
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
    required: true,
  },
  events: [eventSchema],
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
