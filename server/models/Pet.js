const { Schema, model } = require('mongoose');


const PetSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    client: {
        type: String,
    },
    age: {
        type: Number,
    },

    // breed: {

    // }
});


const Pet = model('Pet', PetSchema)

module.exports = Pet;