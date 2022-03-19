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
        species
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