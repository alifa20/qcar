import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Make {
  id: ID!                # "!" denotes a required field
  name: String
}

type Model {
  id: ID!
  makeId: Int
  name: String
  price: Int
  imageUrl: String
}

type CarOW {
  modelId: ID!
  review: String
}

type Query {
  makes: [Make]
  models: [Model]
  carOfTheWeek: CarOW
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
