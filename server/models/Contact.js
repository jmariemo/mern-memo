const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Event = require("./Event")

const contactSchema = new Schema({
  // Name of Contact
  fullName: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true,
  }
  // savedEvents: [Event.schema],
  // },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  }
);

module.exports = contactSchema;
