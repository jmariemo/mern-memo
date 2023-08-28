const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Contact.js
const contactSchema = require('./Contact');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    savedContacts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Contacts'
      }
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

profileSchema.virtual('contacts').get(function () {
    return this.contactSchema.length;
});

const User = model('Profile', userSchema );

module.exports = User; 