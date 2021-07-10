import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="deejpotter.au.auth0.com"
    clientId="9D0pLCV4rnUW8PsFBqjBA3hujwhSxndS"
    redirectUri="localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
