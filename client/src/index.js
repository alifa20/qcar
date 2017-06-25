import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import {Provider} from 'react-redux';
import {loadCarOfTheWeek} from './actions/carActions';
import store, { history } from './store/configure-store';
import { ConnectedRouter } from 'react-router-redux';
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
