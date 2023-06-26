import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
    }
  }
`;

export const POST_LOGIN = gql`
  mutation Login($loginInput: LoginInputDto!) {
    login(loginInput: $loginInput) {
      accessToken
    }
  }
`;

export const KAKAO_CODE = gql`
  mutation KakaoLogin($code: String!) {
    kakaoLogin(code: $code) {
      accessToken
    }
  }
`;

export const GOOGLE_CODE = gql`
  mutation Mutation($code: String!) {
    googleLogin(code: $code) {
      accessToken
    }
  }
`;

export const IMAGE_PRESIGN = gql`
  mutation Mutation($presignedUrlInput: S3PresignedUrlInput!) {
    getPresignedUrl(presignedUrlInput: $presignedUrlInput) {
      presignedUrl
      fileKey
    }
  }
`;

export const RECORD_TUMBLER_PRIVATE_SPACE = gql`
  mutation CreateTumblerRecordOnPrivateSpace(
    $input: CreateTumblerRecordInput!
  ) {
    createTumblerRecordOnPrivateSpace(input: $input) {
      id
    }
  }
`;

export const RECORD_TUMBLER_CAFE = gql`
  mutation CreateTumblerRecord(
    $input: CreateTumblerRecordWithCreateStoreInput!
  ) {
    createTumblerRecord(input: $input) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      nickname
    }
  }
`;

export const LOGOUT = gql`
  mutation Mutation {
    logout
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation ResetPassword($userEmail: String!, $password: String!) {
    resetPassword(userEmail: $userEmail, password: $password) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation {
    deleteUser
  }
`;
