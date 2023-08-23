const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    // Profile that the contact belongs to
    profile: {
        type: String,
        required: true,
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
        type: String,
        },   
    ],
});

module.exports = bookSchema;