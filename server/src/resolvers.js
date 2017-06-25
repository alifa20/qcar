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
    model: (_, args) => {
      console.log('model called');

      const model = models.find(model => model.id === args.id);
      return Object.assign({}, model,
        { make: makes.find(make => make.id === model.makeId) })
    },
    makes: () => makes.map(make =>
      Object.assign({}, make,
        { models: models.filter(model => model.makeId === +make.id) })),
    carOfTheWeek: () => {
      console.log('carOfTheWeek called');
      const model = models.find(model => +model.id === +carOW.modelId);
      const make = makes.find(make => make.id === model.makeId);
      const reviewModel = Object.assign({}, model, { make })
      return Object.assign({}, carOW,
        { model: reviewModel });
    },
  }
};
