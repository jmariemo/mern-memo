const { User, Contact } = require("../models");
// import { GraphQLScalarType, Kind } from "graphql";
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  //   Date: new GraphQLScalarType({
  //     name: "Date",
  //     description: "Date custom scalar type",
  //     parseValue(value) {
  //       return new Date(value); // value from the client
  //     },
  //     serialize(value) {
  //       return value.getTime(); // value sent to the client
  //     },
  //     parseLiteral(ast) {
  //       if (ast.kind === Kind.INT) {
  //         return new Date(+ast.value); // ast value is always in string format
  //       }
  //       return null;
  //     },
  //   }),

  Query: {
    users: async () => {
      return User.find().populate("contacts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("contacts");
    },
    contacts: async (parent, { username }) => {
      const params = username ? { username } : {};
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

    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addContact: async (parent, { contactName, contactZipCode }, context) => {
      if (context.user) {
        const contact = await Contact.create({
          contactName,
          contactZipCode,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { contact: contact._id } }
        );

        return contact;
      }
      throw new AuthenticationError("Please log in.");
    },

    addEvent: async (parent, { contactId, eventName, eventDate }, context) => {
      if (context.user) {
        return Contact.findOneAndUpdate(
          { _id: contactId },
          {
            $addToSet: {
              events: { eventName, eventDate },
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
      throw new AuthenticationError("Please log in");
    },
  },
};

module.exports = resolvers;
