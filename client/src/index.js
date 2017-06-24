import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.css';
import {Provider} from 'react-redux';
import {loadCarOfTheWeek} from './actions/carActions';
// import configureStore from './store/configure-store';

// const store = configureStore();
import store, { history } from './store/configure-store';
import { ConnectedRouter } from 'react-router-redux';

// import {
//   ApolloProvider,
//   ApolloClient,
//   createNetworkInterface
// } from 'react-apollo';

// const networkInterface = createNetworkInterface({
//   uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql'
// })

// const client = new ApolloClient({
//   networkInterface,
//   dataIdFromObject: o => o.id,
//   connectToDevTools: process.env.NODE_ENV === 'development'
// })
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

store.dispatch(loadCarOfTheWeek());

ReactDOM.render(
  <Provider store={store}>
     <ConnectedRouter history={history}>
         <ApolloProvider client={client}>
           <App />
         </ApolloProvider>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
