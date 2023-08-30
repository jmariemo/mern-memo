const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// const Event = require("./Event")

const contactSchema = new Schema({
  // User that the contact belongs to
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // Name of Contact
  fullName: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
    required: true,
  },
  
  toJSON: {
    virtuals: true,
  },
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
