import React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import './App.css';

export const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <List />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
