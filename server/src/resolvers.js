const models = require('./data/models');
const makes = require('./data/makes');
const carOW = require('./data/carOW');

export const resolvers = {
  Query: {
    models: () => {
      return models;
    },
    makes: () => {
      return makes;
    },
    carOfTheWeek: () => {
      return carOW;
    },
  }
};
