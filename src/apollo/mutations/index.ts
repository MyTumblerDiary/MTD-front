import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
    }
  }
`;

export const POST_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
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
  mutation Mutation($input: CreateTumblerRecordOnPrivateSpaceInput!) {
    createTumblerRecordOnPrivateSpace(input: $input) {
      id
    }
  }
`;
