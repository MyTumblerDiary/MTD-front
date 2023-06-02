import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        stores: {
          keyArgs: false,
          merge(existing = [], incoming) {
            if (!incoming.length) {
              return existing;
            }
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});
