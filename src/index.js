import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
