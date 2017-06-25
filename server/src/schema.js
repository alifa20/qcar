import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Make {
  id: ID!                # "!" denotes a required field
  name: String
  models: [Model]
}

type Model {
  id: ID!
  makeId: Int
  make: Make
  name: String
  price: Int
  imageUrl: String
}

type CarOW {
  modelId: ID!
  review: String
  model: Model
}

type Query {
  makes: [Make]
  models(id: Int): [Model]
  model(id: Int): Model
  carOfTheWeek: CarOW
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
