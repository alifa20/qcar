import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modelsReducer(state = initialState.models, action) {
  if (action.type === types.APOLLO_QUERY_RESULT
    && action.operationName.toLowerCase() === types.operation.getModels) {
    // return Object.assign([], action.result.data.models);
    return [
      ...state,
      ...action.result.data.models,
    ];
  }
  return state;
}
