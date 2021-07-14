import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from "./components/Login";
import User from './components/User';
import Admin from './components/Admin';
import Context from './components/Context';


function App() {
  const [authorised, setAuthorised] = useState(false);

  let user = netlifyIdentity.currentUser();
  const history = useHistory();

  if (user && !authorised) {
    setAuthorised(true);
  }
  netlifyIdentity.on('open', () => {
    if (user && authorised) {
      netlifyIdentity.close();
      history.push('/');
    }
  });
  netlifyIdentity.on('close', () => {
    if (user && authorised) {
      history.push('/');
    }
  });
  netlifyIdentity.on('login', () => {
    if (user) {
      setAuthorised(true);
      netlifyIdentity.close();
      history.push('/');
    }
  });
  netlifyIdentity.on('logout', () => {
    if (authorised) {
      setAuthorised(false);
      user = null;
      history.push('/');
    }
  });
  console.log(user, authorised);

  return (
    <Context.Provider value={{ auth: authorised, user: user }}>
      <Header />
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Context.Provider>
  );
}

export default App;
