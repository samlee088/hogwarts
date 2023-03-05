const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        house: String
        spells: [Spell]
        stats: [Stats]
    }

    type Spell {
        _id: ID!
        spellOne: String
        spellTwo: String
        spellThree: String
        spellFour: String
    }

    type Stats {
        _id: ID!
        attack: Float
        defense: Float
        elixirs: Float
        darkMagic: Float
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
        addHouse(house: String): User
        addStats(attack: Float, defense: Float, elixirs: Float, darkMagic: Float) : Stats
    }
`


module.exports = typeDefs;




