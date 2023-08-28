const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Contact.js
const contactSchema = require("./Contact");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    zipCode: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    savedContacts: [contactSchema],
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
  return this.savedContacts.length;
});

const User = model("User", userSchema);

module.exports = User;
