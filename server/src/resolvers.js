const resolvers = {
  Query: {
    books: async (_, args, { dataSources }) => {
      return dataSources.bookRepo.getBooks();
    }
  }
};

module.exports = resolvers;
