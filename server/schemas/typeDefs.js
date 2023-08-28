const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Contact {
    profile: String
    firstName: String
    lastName: String
    zipCode: String
    transitTime: String
    events: [String]
}

type Memo {
    contact: String
    event: String
    date: String
}

input savedContacts {
    firstName: String
    lastName: String
    zipCode: String
    transiteTime: String
    events: [String]
}

type Query {
    me: Contact
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