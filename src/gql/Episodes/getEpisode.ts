import { gql } from "@apollo/client";

export const GET_EPISODE = gql`
  query ($id: ID!) {
    episode(id: $id) {
        id
        name
        air_date
        episode
        created
        characters {
            id
            name
        }
    }
  }
`;