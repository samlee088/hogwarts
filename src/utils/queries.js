import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me($dayOfTheWeek: String!) {
    me(dayOfTheWeek: $dayOfTheWeek) {
      _id
      username
      email
      house
    }
  }
`
