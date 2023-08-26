const { Contact, Events, Login, Profile } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {

        //get a contact by first name and last name
        me: async (parent, args, context) => {

            if(context.user) {
                const contactData = await User.findOne({})
                .select('-__v - password')
                .populate('event')

                return contactData;
            }

            throw new AuthenticationError('Not Logged In')
        },
    },

    Mutation: {

        addMemo: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user};
        }, 

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return {token, user};

        },

        saveContact: async ( parent, args, context ) => {
            if (context.user) {
            
            const updatedEvent = await User.findByIdAndUpdate(
                { _id: context.user._id},
                { $addToSet: { savedContacts: args.input } },
                { new: true}
            );

            return updatedEvent;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
}; 


module.exports = resolvers; 