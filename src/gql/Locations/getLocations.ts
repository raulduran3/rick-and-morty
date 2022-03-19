import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query ($page: Int!) {
    locations(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        type
      }
    }
  }
`;