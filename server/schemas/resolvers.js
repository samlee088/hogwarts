const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {

    Query: {
        me: async(parent, { dayOfTheWeek }, context ) => {
            if( context.user ) {
                return await User.findOne({ _id: context.user._id}).select('-__v -password')
            };
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
          },
          addHouse: async (parent, {house}, context) => {
            if(context.user) {
                const user = await User.findOneAndUpdate(
                    console.log(house),
                    console.log(context.user._id),
                    {_id: context.user._id},
                    {$addToSet: {house: house }}
                )
                console.log(user);

                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
          }
       
    }
}

module.exports = resolvers;