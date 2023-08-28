const { Login, User, Contact, Event } = require("../models");
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
    me: async (parent, args, context) => {},
  },
  Mutation: {
    login: async (parent, args) => {},
    addUser: async (parent, args) => {
      console.log("args", args);
      const user = await User.create(args);
      console.log("user", user);

      token = signToken(user);
      return { token, user };
    },
    addContact: async (parent, {}) => {
      const contact = await Contact.create();
    },
    removeContact: async (parent, {}) => {},
    addEvent: async (parent, {}) => {
      const event = await Event.create();
    },
    removeEvent: async (parent, {}) => {},
  },

  //   Query: {
  //     //get a contact by first name and last name
  //     me: async (parent, args, context) => {
  //       if (context.user) {
  //         const contactData = await User.findOne({})
  //           .select("-__v - password")
  //           .populate("event");

  //         return contactData;
  //       }

  //       throw new AuthenticationError("Not Logged In");
  //     },
  //   },

  //   Mutation: {
  //     addMemo: async (parent, args) => {
  //       const user = await User.create(args);
  //       const token = signToken(user);

  //       return { token, user };
  //     },

  //     login: async (parent, { email, password }) => {
  //       const user = await User.findOne({ email });

  //       if (!user) {
  //         throw new AuthenticationError("Incorrect credentials");
  //       }

  //       const correctPW = await user.isCorrectPassword(password);

  //       if (!correctPW) {
  //         throw new AuthenticationError("Incorrect credentials");
  //       }

  //       const token = signToken(user);
  //       return { token, user };
  //     },

  //     saveContact: async (parent, args, context) => {
  //       if (context.user) {
  //         const updatedEvent = await User.findByIdAndUpdate(
  //           { _id: context.user._id },
  //           { $addToSet: { savedContacts: args.input } },
  //           { new: true }
  //         );

  //         return updatedEvent;
  //       }

  //       throw new AuthenticationError("You need to be logged in!");
  //     },
  //   },
};

module.exports = resolvers;
