const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    userZipCode: String!
    email: String!
    password: String!
    contacts: [Contact]!
  }

  type Contact {
    _id: ID
    contactName: String!
    contactZipCode: String!
  }

  type Event {
    _id: ID
    eventName: String!
    eventDate: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    contacts(username: String): [Contact]
    contact(contactId: ID!): Contact
    me: User
  }

  type Mutation {
    addUser(
      userName: String!
      userZipCode: String!
      email: String!
      password: String!
    ): Auth
    loginUser(email: String!, password: String!): Auth
    addContact(contactName: String!, contactZipCode: String!): Contact
    addEvent(contactId: ID!, eventName: String!, eventDate: String!): Contact
    removeContact(contactId: ID!): Contact
    removeEvent(contactId: ID!, eventId: ID!): Contact
  }
`;

//export typeDefs
module.exports = typeDefs;
