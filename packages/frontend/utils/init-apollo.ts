import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

// @ts-ignore
import fetch from 'node-fetch';

// @ts-ignore
let apolloClient = null;

// @ts-ignore
function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: '/api/', // Server URL (must be absolute)
      // Use fetch() polyfill on the server
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

// @ts-ignore
export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  // @ts-ignore
  if (!apolloClient) {
    // @ts-ignore
    apolloClient = create(initialState);
  }
  // @ts-ignore
  return apolloClient;
}
