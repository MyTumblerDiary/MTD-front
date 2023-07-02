import { ApolloClient, createHttpLink } from '@apollo/client';
import { cache } from '@/apollo/cache';
import { setContext } from '@apollo/client/link/context';

import { ACCESS_TOKEN } from '@/utils/constants/localStorageKey';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});
