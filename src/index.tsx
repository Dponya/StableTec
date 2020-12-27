import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App'
import { StoresProvider, stores } from './main/stores/index'

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider value={stores} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
