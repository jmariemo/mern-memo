import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $zipCode: String!) {
    addUser(name: $name, email: $email, password: $password, zipCode: $zipCode) {
      token
      User {
        _id
        name
        zipCode
        contacts
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($UserId: ID!, $contact: String!) {
    addContact(UserId: $UserId, contact: $contact) {
      _id
      name
      zipCode
      contacts {
        contact
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($UserId: ID!, $contact: String!) {
    addContact(UserId: $UserId, contact: $contact) {
      _id
      name
      contacts {
        contact {
          event
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;

export const REMOVE_CONTACT = gql`
  mutation removeContact($contact: String!) {
    removeContact(contact: $contact) {
      _id
      name
      zipCode
      contacts {
        contact
      }
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation removeEvent($UserId: ID!, $contact: String!) {
    removeContact(UserId: $UserId, contact: $contact) {
      _id
      name
      zipCode
      contacts {
        contact {
          event
        }
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($name: String!, $email: String!, $password: String!, $zipCode: String!) {
    removeUser(name: $name, email: $email, password: $password, zipCode: $zipCode) {
      token
      profile {
        _id
        name
        zipCode
        contacts
      }
    }
  }
`;