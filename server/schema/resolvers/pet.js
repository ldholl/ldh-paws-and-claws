const { AuthenticationError } = require('apollo-server-express');
const { Pet, User } = require('../../models');
const { signToken } = require('../../utils/auth');

const petResolvers = {
    Query: {
        getAllPets: async () => {
            return Pet.find()
        },
        getPetByID: async (parent, {_id}) => {
            return Pet.findOne({_id})
        },
    },
    Mutation: {
        addPet: async (parent, args, context) => {
            if (context.user) {
                const pet = await Pet.create({ ...args, client: context.user.clientName });
        
                await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { pets: pet._id } },
                  { new: true }
                );
        
                return pet;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            },
        deletePet: async(parent, {_id}, context) => {
             const pet = await Pet.findById(_id)
    
            if(context.user){
                if(context.user.clientName == pet.client){
                    const deleteIt = await Pet.deleteOne({_id})
     
                    return deleteIt
                }
             }
     }
    }
};

module.exports = petResolvers;