const mongoose = require ('mongoose');
const { Schema, model } = mongoose; 
const contactSchema = require("./Contact")


const eventSchema = new Schema({
  // the contact card
  contact: [contactSchema],
  // name of event
  eventName: {
      type: String,
      required: true, 
  }, 
  date: {
      type: Date, 
      required: true,
  },
});

const Event = model('Event', eventSchema );

module.exports = Event;