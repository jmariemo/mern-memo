const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  contactName: {
    type: String,
    required: "Please add name for contact",
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  contactZipCode: {
    type: String,
    required: "Please add zip code for contact",
    minlength: 1,
    maxlength: 10,
  },
  events: [
    {
      eventName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
      }
    },
  ],
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
