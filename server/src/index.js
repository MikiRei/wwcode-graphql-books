const { ApolloServer, MockList } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const BookRepo = require("./datasources/book_repo");

const { createStore } = require("./connectors");

const mocks = {
  Int: () => 1,
  Float: () => 22.5,
  String: () => "this value is a mock",
  Query: () => ({
    books: () => new MockList([1, 10])
  })
};

const store = createStore();

const dataSources = () => ({
  bookRepo: new BookRepo({ store })
});

const context = async ({ req }) => {
  return {
    token: "foobar"
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  mocks,
  mockEntireSchema: false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
