import { gql } from '@apollo/client';

export const CHECK_USERNAME_DUPLICATION = gql`
  query Query($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`;

export const CHECK_EMAIL_DUPLICATION = gql`
  query Query($email: String!) {
    checkEmail(email: $email)
  }
`;

export const SEND_EMAIL = gql`
  query Query($email: String!) {
    sendEmail(email: $email)
  }
`;

export const CHECK_EMAIL_AUTH = gql`
  query Query($email: String!, $code: String!) {
    checkcode(email: $email, code: $code)
  }
`;

export const GET_TUMBLER_RECORDS = gql`
  query TumblerRecords($searchTumblerRecordInput: SearchTumblerRecordInput!) {
    tumblerRecords(searchTumblerRecordInput: $searchTumblerRecordInput) {
      filteredDiscount
      filteredTumbler
      totalDiscount
      totalUsedTumbler
      tumblerRecords {
        usedAt
        prices
        placeType
        memo
        imageFileKey
        id
        deletedAt
        createdAt
        store {
          name
          streetNameAddress
        }
      }
    }
  }
`;
