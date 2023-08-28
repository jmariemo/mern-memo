const mongoose = require ('mongoose');
const { Schema, model } = require('mongoose'); 


const eventSchema = new Schema({
  // the contact card
  contact: {
      type: Schema.Types.ObjectId, 
      ref: 'Contact'
  },
  // name of event
  eventName: {
      type: String,
      required: true, 
  }, 
  date: {
      type: String, 
      required: true,
  },
});

const Events = model('Events', eventSchema );

module.exports = eventSchema;