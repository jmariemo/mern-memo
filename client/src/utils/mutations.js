import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $userName: String!
    $zipCode: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      zipCode: $zipCode
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


// export const ADD_CONTACT = gql``;

// export const REMOVE_CONTACT = gql``;

// export const ADD_EVENT = gql``;

// export const REMOVE_EVENT = gql``;

