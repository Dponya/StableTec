const { gql } = require('apollo-server');
module.exports = gql`
enum Gender {
    MALE
    FEMALE
}

type Pony {
    id: String!
    name: String!
    age: Int
    gender: [Gender]
  }

  type Query {
      getPony(id: String!): Pony!
      ponies: [Pony!]
  }

  type Mutation {
      addPony(name: String!, age: Int): Pony! 
  }
`