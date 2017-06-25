import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carReducer(state = initialState.car, action) {

  if (action.type === types.APOLLO_QUERY_RESULT
    && action.operationName.toLowerCase() === types.operation.getModel) {
    console.log('hi', action);
    // // return Object.assign([], action.result.data.models);
    // return [
    //   ...state,
    //   ...action.result.data.models,
    // ];
    return Object.assign({}, action.result.data.model);

  }
  return state;
}
