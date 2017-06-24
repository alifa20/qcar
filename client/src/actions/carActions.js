import * as types from './actionTypes';
import axios from 'axios';
import config from '../config';

const GraphQLEndpoint = config.REACT_APP_GRAPHQL_URI;

export function loadCarOWSuccess(review) {
  return { type: types.LOAD_CAR_OW_SUCCESS, review };
}

export function loadCarOWError(error) {
  return { type: types.LOAD_CAR_OW_ERROR, error };
}
export function loadCarOfTheWeek() {
  const query = `
            query getCarOfTheWeek {
              carOfTheWeek {
                modelId
                review
              }
            }
        `;
  return dispatch => axios.post(GraphQLEndpoint, {
    query,
  }).then(result => {
    if (result.data.errors) {
      dispatch(loadCarOWError(result.data.errors));
      console.log(result.data.errors);
      return;
    }
    dispatch(loadCarOWSuccess(result.data.data.carOfTheWeek));
  }).catch(err => {
    console.log('error happened', err);
    throw (err);
  });
}
