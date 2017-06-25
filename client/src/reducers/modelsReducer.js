import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modelsReducer(state = initialState.models, action) {
  if (action.type === types.APOLLO_QUERY_RESULT
    && action.operationName.toLowerCase() === types.operation.getmodel) {
    return Object.assign([], action.result.data.models);
    // return Object.assign({}, action.result.data.model);
  }
  return state;
}
