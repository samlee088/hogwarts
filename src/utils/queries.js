import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      house
      spells{
        id
        name
        type
        effect
        damage
      }
      stats{
        attack
        defense
        elixirs
        darkMagic
      }
    }
  }
`
