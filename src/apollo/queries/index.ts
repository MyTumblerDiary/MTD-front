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

export const FETCH_STORES = gql`
  query Stores(
    $searchStoreInput: SearchStoreInput
    $paginationInput: PaginationInput
  ) {
    stores(
      searchStoreInput: $searchStoreInput
      paginationInput: $paginationInput
    ) {
      currentPage
      pagesCount
      searchedCount
      totalCount
      stores {
        id
        latitude
        longitude
        streetNameAddress
        name
        lotNumberAddress
        discountPrice
        imageFileKey
      }
    }
  }
`;
