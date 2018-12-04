const resolvers = {
  Query: {
    books: async (_, _args, { dataSources }) => {
      return dataSources.bookRepo.getBooks();
    },
    author: async (_, { id }, { dataSources }) => {
      return dataSources.bookRepo.findAuthor({ id });
    }
  }
};

module.exports = resolvers;
