import React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import './App.css';



const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="appWrapper">
        <Header />
        <List />
        <Content />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
