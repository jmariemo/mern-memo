const mongoose = require ('mongoose');
const { Schema } = mongoose; 

const eventSchema = new Schema({
    // the contact card
    contact: {
        type: String, 
        required: true,
    },
    // name of event
    event: {
        type: String,
        required: true, 
    }, 
    date: {
        type: String, 
    },
});

module.exports = eventSchema;