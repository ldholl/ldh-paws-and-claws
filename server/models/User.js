const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        clientName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address']
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        },
        homeAddress: {
            type: String,
            required: true,
        },
        zipcode: {
            type: Number,
            required: true,
        //     validate: {
        //         validator:  function(zipcode){
        //             let acceptedZips = [32789, 32801, 32803, 32804, 32805, 32806, 32807, 32808, 32809,32810, 32811, 32812, 32814, 32819, 32822, 32824, 32827, 32829, 32832, 32835, 32839];
  
        //             let match = acceptedZips.find(index => index === zipcode)

        //              if(match === undefined){
        //              return false
        //              }
        //              else {
        //              return true
        //             }
        //         },
        //         required: [true, "You're outside of our service area!"]
        // },
        },
        phoneNumber: {
            type: Number,
            match: [/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, 'Please enter a valid phone number']
        },
        pets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pet'
            }
        ],
        appointments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Appointment'
            }
        ]
    },
);

userSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password);
};




const User = model('User', userSchema);

module.exports = User;