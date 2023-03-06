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
        id: String
        name: String
        type: String
        effect: String
        damage: Int
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
        me: User
        users: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addHouse(house: String): User
        addStats(attack: Float, defense: Float, elixirs: Float, darkMagic: Float) : Stats
        saveSpell(id: String, name: String, type: String, effect: String) : Spell
    }
`


module.exports = typeDefs;




