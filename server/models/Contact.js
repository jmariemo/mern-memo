const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Event = require("./Event")

const contactSchema = new Schema({
  // User that the contact belongs to
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  savedEvents: [Event.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
