import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        stores: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (!incoming.stores.length) {
              return existing;
            }

            if (!!existing.stores) {
              return {
                ...incoming,
                stores: [...existing.stores, ...incoming.stores]
              };
            }

            return incoming;
          }
        },
        tumblerRecordsPaginated: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (!incoming.tumblerRecords.length) {
              return existing;
            }

            if (!!existing.tumblerRecords) {
              return {
                ...incoming,
                tumblerRecords: [
                  ...existing.tumblerRecords,
                  ...incoming.tumblerRecords
                ]
              };
            }
            return incoming;
          }
        }
      }
    }
  }
});
