const { AuthenticationError } = require('apollo-server-express');
const { Appointment, User } = require('../../models');
const { signToken } = require('../../utils/auth');

const appointmentResolvers = {
    Query: {
        getAllAppointments: async () => {
            return Appointment.find()
        }
    },
    Mutation: {
        addAppointment: async (parent, args, context) => {
            if (context.user) {
                const appt = await Appointment.create({ ...args, client: context.user.clientName, address: context.user.homeAddress });
        
                await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { appointments: appt._id } },
                  { new: true }
                );
                
                return appt;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            },
        deleteAppointment: async(parent, {_id}, context) => {
            const appt = await Appointment.findById(_id)

            if(context.user){
                if(context.user.clientName === appt.client){
                    const deleteIt = await Appointment.deleteOne({_id})
 
                    return deleteIt
                }
            }
        }
    }
};

module.exports = appointmentResolvers;