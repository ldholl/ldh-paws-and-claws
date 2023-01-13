const { gql } = require('apollo-server-express');

const appointment = gql`
    type Appointment {
        _id: ID
        apptDate: String
        apptTime: String
        address: String
        service: String
        client: String
    }

    extend type Query {
        getAllAppointments: [Appointment]
    }

    extend type Mutation {
        addAppointment(apptDate: String!, apptTime: String!, service: String!): Appointment
        deleteAppointment(_id: ID):Appointment
    }
`;

module.exports = appointment;