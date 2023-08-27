const mongoose = require('mongoose');
const { Schema } = mongoose;
const eventSchema = require('./Events');

const contactSchema = new Schema({
  // Profile that the contact belongs to
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  // Name of Contact
  firstName: {
      type: String,
  },
  lastName: {
      type: String,
  },
  zipCode: {
      type: String, 
      required: true, 
  },
  transitTime: {
      type: String,  
  },
  events: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Events'
    }
]
  });

const Contact = model('Contacts', contactSchema );

module.exports = Contact