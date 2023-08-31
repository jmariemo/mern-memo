const { Schema, model } = require("mongoose");
const dateFormat = require("mongoose-date-format");

const contactSchema = new Schema({
  contactName: {
    type: String,
    required: true,
  },
  contactZipCode: {
    type: String,
    required: true,
  },
  events: [
    {
      eventName: {
        type: String,
      },
      eventDate: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const Contact = model("Contact", contactSchema)

module.exports = Contact;
