import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query ($id: ID!) {
    location(id: $id) {
        id
        name
        type
        dimension
        created
        residents {
            id
            name
        }
    }
  }
`;