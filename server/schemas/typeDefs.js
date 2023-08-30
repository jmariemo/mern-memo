const { gql } = require('apollo-server-express');
// scalar Date

const typeDefs = gql`

type User {
    _id: ID!
    userName: String!
    zipCode: String!
    email: String!
    contactCount: Int
    savedContacts: [Contact]
}

type Contact {
    contactId: ID!
    fullName: String!
    zipCode: String!
    eventTitle: String!
    eventDate: String!
}

type Event {
    contact: Contact
    eventName: String!
    eventDate: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

input ContactDataInput {
  contactId: ID!
  fullName: String!
  zipCode: String!
  eventTitle: String!
  eventDate: String!
}

input EventDataInput {
    contact: [String]
    eventName: String!
    eventDate: String!
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(userName: String!, zipCode: String!, email: String!, password: String!): Auth
    addContact(input: ContactDataInput): User
    removeContact(contactId: ID!): User
    addEvent(input: EventDataInput): Contact
    removeEvent(eventId: ID!): Contact
}
`;

//export typeDefs
module.exports = typeDefs;