import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../apolloClient';
import carOw from './carOwReducer';
import makes from './makesReducer';
import models from './modelsReducer';
import car from './carReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  apollo: client.reducer(),
  carOw,
  makes,
  models,
  car
});

export default rootReducer;
