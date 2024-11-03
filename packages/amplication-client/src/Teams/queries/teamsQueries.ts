import { gql } from "@apollo/client";

export const TEAM_FIELDS_FRAGMENT = gql`
  fragment TeamFields on Team {
    id
    name
    description
    color
    members {
      id
      account {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

export const DELETE_TEAM = gql`
  mutation deleteTeam($where: WhereUniqueInput!) {
    deleteTeam(where: $where) {
      id
    }
  }
`;

export const GET_TEAM = gql`
  ${TEAM_FIELDS_FRAGMENT}
  query team($teamId: String!) {
    team(where: { id: $teamId }) {
      ...TeamFields
    }
  }
`;

export const UPDATE_TEAM = gql`
  ${TEAM_FIELDS_FRAGMENT}
  mutation updateTeam($data: TeamUpdateInput!, $where: WhereUniqueInput!) {
    updateTeam(data: $data, where: $where) {
      ...TeamFields
    }
  }
`;

export const CREATE_TEAM = gql`
  ${TEAM_FIELDS_FRAGMENT}
  mutation createTeam($data: TeamCreateInput!) {
    createTeam(data: $data) {
      ...TeamFields
    }
  }
`;

export const FIND_TEAMS = gql`
  ${TEAM_FIELDS_FRAGMENT}
  query teams($where: TeamWhereInput, $orderBy: TeamOrderByInput) {
    teams(where: $where, orderBy: $orderBy) {
      ...TeamFields
    }
  }
`;

export const ADD_MEMBERS_TO_TEAM = gql`
  ${TEAM_FIELDS_FRAGMENT}
  mutation addMembersToTeam(
    $data: TeamUpdateMembersInput!
    $where: WhereUniqueInput!
  ) {
    addMembersToTeam(data: $data, where: $where) {
      ...TeamFields
    }
  }
`;

export const REMOVE_MEMBERS_FROM_TEAM = gql`
  ${TEAM_FIELDS_FRAGMENT}
  mutation removeMembersFromTeam(
    $data: TeamUpdateMembersInput!
    $where: WhereUniqueInput!
  ) {
    removeMembersFromTeam(data: $data, where: $where) {
      ...TeamFields
    }
  }
`;
export const GET_WORKSPACE_USERS = gql`
  query workspaceUsers {
    workspaceUsers {
      id
      isOwner
      account {
        id
        email
        firstName
        lastName
      }
    }
  }
`;
