const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const mocks = {
  Int: () => 10,
  Float: () => 22.5,
  String: () => 'this value is a mock',
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
  mocks,
  mockEntireSchema: false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});