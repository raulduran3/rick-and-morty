import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      id
      image
      species
      type
      status
      gender
      created
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
      }
    }
  }
`;