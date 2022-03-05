import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        name
        id
        image
        species
        type
        status
        gender
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;