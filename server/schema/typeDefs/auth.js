const { gql } = require('apollo-server-express');

const auth = gql `
    type Auth {
        token: ID!
        user: User
    }

    extend type Mutation {
        login(email: String!, password: String!): Auth
        
        addUser(username: String!, email: String!, phoneNumber: Int, clientName: String!, password: String! homeAddress: String!, zipcode: Int!): Auth
    }
    `

    module.exports = auth;