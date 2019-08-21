module.exports = {
  MongoURL: `mongodb+srv://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@vidly-database-0klcd.mongodb.net/vidly-database?retryWrites=true&w=majority`
};
