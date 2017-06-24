import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

import config from './config'

const networkInterface = createNetworkInterface({
  uri: config.REACT_APP_GRAPHQL_URI
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  connectToDevTools: process.env.NODE_ENV === 'development'
})

export default client;
