const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Contact.js
const contactSchema = require('./Contact');

const profileSchema = new Schema({
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
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    savedContacts: [contactSchema],
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

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('bookCount').get(function () {
    return this.savedBooks.length;
});

const Profile = model('User', profileSchema );

module.exports = Profile; 