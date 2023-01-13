import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                clientName
            }
        }
    } `;

export const ADD_USER = gql`
    mutation addUser($clientName: String! $username: String!, $email: String!, $phoneNumber: Int, $password: String!, $zipcode: Int!, $homeAddress: String!){
        addUser(clientName: $clientName, username: $username, email: $email, phoneNumber: $phoneNumber, password: $password, homeAddress: $homeAddress, zipcode: $zipcode){
            token
            user {
                _id
                clientName
                username
                email
                phoneNumber
                password
                homeAddress
                zipcode
            }
        }
    }`;

//USER UPDATES    
export const UPDATE_EMAIL = gql`
mutation updateEmail($email: String){
    updateEmail(email: $email){
      _id
      username
      email
    }
  }`;

  export const EDIT_PHONE = gql`
mutation updatePhone($phoneNumber: Int){
    updatePhone(phoneNumber: $phoneNumber){
      _id
      username
      phoneNumber
    }
  }`;

  export const UPDATE_ADDRESS = gql`
  mutation updateAddress($homeAddress: String, $zipcode: Int){
    updateAddress(homeAddress: $homeAddress, zipcode: $zipcode){
        homeAddress
        zipcode
    }
  }
  `


//PET MUTATIONS
    export const ADD_PET = gql`
        mutation addPet($petName: String!, $petType: String!){
            addPet(petName: $petName, petType: $petType){
                _id
                petName
                petType
                client
            }
        }
    `;
    export const DELETE_PET = gql `
    mutation deletePet($_id: ID!){
        deletePet(_id: $_id){
          _id
        }
      }
      `;   

//APPOINTMENT MUTATIONS
    export const ADD_APPOINTMENT = gql`
    mutation addAppointment($apptDate: String!, $apptTime: String!, $service: String!){
        addAppointment(apptDate: $apptDate, apptTime: $apptTime, service: $service) {
            _id
            apptDate
            apptTime
            service
            address
            client
            }
        }
    `
export const DELETE_APPOINTMENT = gql `
mutation deleteAppointment($_id: ID!){
    deleteAppointment(_id: $_id){
      _id
    }
  }
  `;