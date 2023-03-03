const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        workouts: [Workout]
    }
    type Auth {
        token: ID!
        user: User
      }
  
    type Query {
        me( dayOfTheWeek: String! ): User
        users: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        summaryPage(summary: MessageInput ): User
    }
`

module.exports = typeDefs;



