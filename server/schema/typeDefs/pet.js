const { gql } = require('apollo-server-express');

const pet = gql`
    type Pet {
        _id: ID
        petName: String
        petType: String
        petAge: Int
        client: String
    }

    extend type Query {
        getAllPets: [Pet]
        getPetByID(_id: ID!): Pet
    }

    extend type Mutation {
        addPet(petName: String!, petType: String!, petAge: Int):Pet
        deletePet(_id: ID):Pet
    }

`

module.exports = pet;