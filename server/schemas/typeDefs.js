const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    zipCode: Int!
    contactCount: Int
    savedContacts: [Contact]
}

type Contact {
    contactId: ID!
    firstName: String!
    lastName: String!
    zipCode: Int!
    eventCount: Int
    savedEvents: [Event]
}

type Event {
    contact: [Contact]
    eventName: String!
    date: String
}

type Query {
    me: User
}

input savedContacts {
    firstName: String
    lastName: String
    zipCode: String
    events: [String]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addMemo(contact: String!, event: String!, password: String!): Auth
    saveContact(input: savedContacts!): Contact
}

type Auth {
    token: ID!
    user: Contact
}
`;

//export typeDefs
module.exports = typeDefs;