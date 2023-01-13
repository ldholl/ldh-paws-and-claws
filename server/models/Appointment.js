const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
    apptDate: {
        type: Date
    },
    apptTime: {
        type: String
    },
    address: {
        type: String
    },
    client: {
        type: String
    },
    service: {
        type: String
    }
    
})


const Appointment = model('Appointment', AppointmentSchema);

module.exports = Appointment;