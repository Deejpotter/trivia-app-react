import React from 'react';
import ReactDOM from 'react-dom';
import netlifyIdentity from 'netlify-identity-widget';

import './index.css';
import App from './App';

// window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
