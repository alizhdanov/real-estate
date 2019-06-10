import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

// import * as fetch from 'cross-fetch';
// import fetch from 'isomorphic-unfetch';
import fetch from 'node-fetch';
// import { fetch } from 'apollo-env';

// @ts-ignore
let apolloClient = null;

// @ts-ignore
function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      // Use fetch() polyfill on the server
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

// @ts-ignore
export default function initApollo(initialState) {
  console.log('BROWSER', process.browser);
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  // @ts-ignore
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  // @ts-ignore
  return apolloClient;
}
