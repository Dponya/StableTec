const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./typeDefs/typeDefs');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://stabletecuser:adminroot@cluster0.nmwoj.mongodb.net/stabletecdb?retryWrites=true&w=majority',
    { useNewUrlParser: true }, { useUnifiedTopology: true })

const dbConnection = mongoose.connection;
dbConnection.on(`error`, err => console.log(`Connection error: ${err}`));
dbConnection.once(`open`, () => console.log(`Connected to DB!`));

const server = new ApolloServer({ typeDefs, resolvers, cors: true });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});