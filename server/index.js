const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers/resolvers')
const typeDefs = require('./typeDefs/typeDefs')

/* const ponies = [
    {
        id: '1',
        name: 'LittlePip',
        age: 20,
        gender: ['FEMALE']
    },
]; */


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});