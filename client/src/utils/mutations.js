import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $userName: String!
    $userZipCode: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      userZipCode: $userZipCode
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_CONTACT = gql`
mutation AddContact($contactName: String!, $contactZipCode: String!) {
  addContact(contactName: $contactName, contactZipCode: $contactZipCode) {
    _id
    contactName
    contactZipCode
    events {
      _id
      eventName
      eventDate
    }
  }
}
`;

export const ADD_EVENT = gql`
mutation AddEvent($contactId: ID!, $eventName: String!, $eventDate: String!) {
  addEvent(contactId: $contactId, eventName: $eventName, eventDate: $eventDate) {
    _id
    contactName
    contactZipCode 
    events {
      _id
      eventName
      eventDate
    }
  }
}
`;


