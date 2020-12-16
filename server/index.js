const { ApolloServer, gql } = require('apollo-server');


const ponies = [
    {
        name: 'LittlePip',
        age: 20,
    },
];





const typeDefs = gql`
type Pony {
    name: String
    age: Int
  }

  type Query {
      ponies: [Pony]
  }
`

const resolvers = {
    Query: {
        ponies: () => ponies
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});