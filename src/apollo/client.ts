import { ApolloClient, createHttpLink } from '@apollo/client';
import { cache } from '@/apollo/cache';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://3.34.238.137:3000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');
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
