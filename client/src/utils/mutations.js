import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $zipCode: String!) {
    addProfile(name: $name, email: $email, password: $password, zipCode: $zipCode) {
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

export const ADD_CONTACT = gql`
  mutation addContact($profileId: ID!, $contact: String!) {
    addContact(profileId: $profileId, contact: $contact) {
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
  mutation addEvent($profileId: ID!, $contact: String!) {
    addContact(profileId: $profileId, contact: $contact) {
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
      profile {
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
  mutation removeEvent($profileId: ID!, $contact: String!) {
    removeContact(profileId: $profileId, contact: $contact) {
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

export const REMOVE_PROFILE = gql`
  mutation removeProfile($name: String!, $email: String!, $password: String!, $zipCode: String!) {
    removeProfile(name: $name, email: $email, password: $password, zipCode: $zipCode) {
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