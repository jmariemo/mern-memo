import { gql } from '@apollo/client';

const GET_ME = gql`
query Me {
    me {
      _id
      contactCount
      email
      savedContacts {
        contactId
        eventCount
        firstName
        lastName
        savedEvents {
          contact {
            contactId
            eventCount
            firstName
            lastName
            zipCode
          }
          eventDate
          eventName
        }
        zipCode
      }
    }
  }`

module.exports = GET_ME;