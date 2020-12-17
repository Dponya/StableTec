import React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

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
