import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HOUSE = gql`
  mutation addHouse(
    $house: String
  ) {
      addHouse(
        house: $house,
      ) {
        house
      }
  }
`

export const ADD_STATS = gql`
  mutation addStats(
    $attack: Float, 
    $defense: Float,
    $elixirs: Float,
    $darkMagic: Float
  ) {
      addStats(
        attack: $attack,
        defense: $defense,
        elixirs: $elixirs,
        darkMagic: $darkMagic
      )
      {
        attack
        defense
        elixirs
        darkMagic
      }
  }
`
export const SAVE_SPELL = gql`
  mutation saveSpell(
    $id: String,
    $name: String,
    $type: String,
    $effect: String
  ) {
    saveSpell(
      id: $id,
      name: $name,
      type: $type,
      effect: $effect
    )
    {
      id
      name
      type
      effect
    }
  }
`
