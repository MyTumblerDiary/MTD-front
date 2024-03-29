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
    createUserEmail(email: $email)
  }
`;

export const CHECK_EMAIL_AUTH = gql`
  query Query($email: String!, $code: String!) {
    checkcode(email: $email, code: $code)
  }
`;

export const GET_TUMBLER_RECORDS = gql`
  query TumblerRecords {
    tumblerRecords {
      prices
      placeType
      memo
      imageFileKey
      id
      usedAt
      store {
        name
        streetNameAddress
      }
    }
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

export const GET_MYPAGE_INFO = gql`
  query Query {
    user {
      nickname
      social
    }
  }
`;

export const SEARCH_FRANCISE = gql`
  query FranchisesBySearch($searchInput: SearchFranchiseInput!) {
    franchisesBySearch(searchInput: $searchInput) {
      id
      name
      discountPrice
    }
  }
`;

export const GET_TUMBLER_RECORDS_PAGINATION = gql`
  query TumblerRecordsPaginated($input: FindWithOptionsTumblerRecordInput) {
    tumblerRecordsPaginated(input: $input) {
      currentCount
      totalCount
      currentPage
      totalPages
      tumblerRecords {
        usedAt
        placeType
        memo
        prices
      }
    }
  }
`;
