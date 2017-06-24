// import rootReducer from '../reducers';
// import {createStore, compose} from 'redux';

// // enable redux devtools... can this be done with Webpack instead?
// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

// export default (initialState) => {
//   return createStore(rootReducer, initialState, enhancers);
// };


import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import client from '../apolloClient';

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  client.middleware()
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store

