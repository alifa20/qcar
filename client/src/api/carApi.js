import delay from './delay';
import carOW from './data/carOW.json'
import { gql, graphql } from 'react-apollo';

class CarApi {
  static getCarOW() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, carOW));
      }, delay);
    });
  }
}

export default CarApi;
