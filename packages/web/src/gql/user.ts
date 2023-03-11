import { gql } from "graphql-tag";

export const GET_ALL_USERS = gql`
  query AllUsers {
    users {
      _id
      name
      age
      update_at
      create_at
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      name
      age
      avatar
      create_at
      update_at
    }
  }
`;