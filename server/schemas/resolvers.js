const { User, contactSchema, Event } = require("../models");
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
    
    addUser: async (parent, args) => {
      console.log("args", args);
      const user = await User.create(args);
      console.log("user", user);

      token = signToken(user);
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

    addContact: async (parent, { ContactDataInput }, context) => {
      console.log("contactDataInput", { ContactDataInput })
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: ContactDataInput } }
        );

        return context.user;
      }
      throw new AuthenticationError("Please log back in.");
    },

    removeContact: async (parent, {}) => {},
    addEvent: async (parent, {}) => {
      const event = await Event.create();
    },
    removeEvent: async (parent, {}) => {},
  },
};

module.exports = resolvers;
