const models = require('./data/models');
const makes = require('./data/makes');
const carOW = require('./data/carOW');

export const resolvers = {
  Query: {
    models: (_, args) => {
      console.log(new Date() + ' models called', args);
      if (!args || !args.makeId) {
        console.log('returning  all ');
        return models;
      }
      return models.filter(model => model.makeId === +args.makeId);
    },
    makes: () => {
      return makes.map(make => {
        return Object.assign({},
          make,
          { models: models.filter(model => model.makeId === +make.id) })
      });
    },
    carOfTheWeek: () => {
      return carOW;
    },
  }
};
