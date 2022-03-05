import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query ($page: Int!) {
    episodes(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;