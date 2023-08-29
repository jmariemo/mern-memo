const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");
const Contact = require("./Contact");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    savedContacts: [Contact.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("contactCount").get(function () {
  return this.contacts.length;
});

const User = model("User", userSchema)

module.exports = User;
