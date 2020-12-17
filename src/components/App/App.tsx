import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Inventory } from '../Inventory/Inventory'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Route } from 'react-router-dom'
import { Stats } from '../Stats/Stats'
import { Data } from '../Data/Data'
import { Map } from '../Map/Map'
import { Radio } from '../Radio/Radio'
import { Weather } from '../Weather/Weather'
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

        <Route path={'/stats'}>
          <Stats />
        </Route>

        <Route path={'/inv'}>
          <Inventory />
        </Route>

        <Route path={'/data'}>
          <Data />
        </Route>

        <Route path={'/map'}>
          <Map />
        </Route>

        <Route path={'/radio'}>
          <Radio />
        </Route>

        <Route path={'/weather'}>
          <Weather />
        </Route>

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
