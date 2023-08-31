const { AuthenticationError } = require("apollo-server-express");
const { User, Contact } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("contacts");
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName }).populate("contacts");
    },
    contacts: async (parent, { userName }) => {
      const params = userName ? { userName } : {};
      return Contact.find(params);
    },
    contact: async (parent, { contactId }) => {
      return Contact.findOne({ _id: contactId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("contacts");
      }
      throw new AuthenticationError("Please log in.");
    },
  },

  Mutation: {
    addUser: async (parent, { userName, userZipCode, email, password }) => {
      const user = await User.create({
        userName,
        userZipCode,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No account yet. Please sign up!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong info!");
      }

      const token = signToken(user);

      return { token, user };
    },
    addContact: async (parent, { contactName, contactZipCode }, context) => {
      if (context.user) {
        const contact = await Contact.create({
          contactName,
          contactZipCode
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { contacts: contact._id } }
        );

        return contact;
      }
      throw new AuthenticationError("Please log in.");
    },
    addEvent: async (parent, { contactId, eventName }, context) => {
      if (context.user) {
        return Contact.findOneAndUpdate(
          { _id: contactId },
          {
            $addToSet: {
              comments: { eventName },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("Please log in.");
    },
    removeContact: async (parent, { contactId }, context) => {
      if (context.user) {
        const contact = await Contact.findOneAndDelete({
          _id: contactId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { contacts: contact._id } }
        );

        return contact;
      }
      throw new AuthenticationError("Please log in.");
    },
    removeEvent: async (parent, { contactId, eventId }, context) => {
      if (context.user) {
        return Contact.findOneAndUpdate(
          { _id: contactId },
          {
            $pull: {
              events: {
                _id: eventId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("Please log in.");
    },
  },
};

module.exports = resolvers;
