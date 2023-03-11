import { gql } from "graphql-tag";

export const GET_ALL_GROUPS = gql`
  query AllGroups {
    groups {
      _id
      name
      members
      create_at
      update_at
    }
  }
`;
