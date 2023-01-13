const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../../models');
const { findByIdAndUpdate } = require('../../models/Pet');
const { signToken } = require('../../utils/auth');

const userResolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user){
            const userData = await User.findOne({ _id: context.user._id})
            .populate('pets')
            .populate('appointments');

            return userData;
        }

        throw new AuthenticationError('Not logged in');

        },
        getAllUsers: async () => {
            return User.find()
        },

        getUserByID: async (parent, {_id}) => {
            return User.findOne({ _id})
            .populate('pets')
            .populate('appointments');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            try {
                const user = await User.create(args)
                console.log('----------------');
                console.log(user);

                const token = signToken(user);
                console.log('----------------');
                console.log(token);
                return { token, user};

            } catch (error) {
                console.log('something failed');
                console.log(JSON.stringify(error, null, 2));
                return err;
            }
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });
          

            if(!user){
                throw new AuthenticationError('There are no accounts with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user)

            return {token, user};
        },
///UPDATE USERS            
          updateEmail: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updatePhone: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateAddress: async (parent, args, context) => {
            if(context.user){
                return await User.findByIdAndUpdate(context.user._id, args, { new: true});
            }
            throw new AuthenticationError('Not logged in')
          }
}
};

module.exports = userResolvers;