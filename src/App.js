import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from "./components/Login";
import Trivia from './components/Trivia';
import Answers from './components/Answers';


function App() {
  const [authorised, setAuthorised] = useState(false);

  const user = netlifyIdentity.currentUser();
  const history = useHistory();

  function handleAuthorised(value) {
    setAuthorised(value);
  }

  if (user && !authorised) {
    handleAuthorised(true);
  }
  netlifyIdentity.on('open', () => {
    if (user) {
      netlifyIdentity.close();
    }
  });
  netlifyIdentity.on('close', () => {
    if (user) {
      history.push('/');
    }
  });
  netlifyIdentity.on('login', () => {
    if (user) {
      handleAuthorised(true);
      netlifyIdentity.close();
      history.push('/');
    }
  });
  netlifyIdentity.on('logout', () => {
    if (user) {
      handleAuthorised(false);
      history.push('/');
    }
  });
  console.log(user);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/trivia">
            <Trivia authorised={authorised} handleAuthorised={handleAuthorised} user={user} />
          </Route>
          <Route path="/answers">
            <Answers authorised={authorised} handleAuthorised={handleAuthorised} user={user} />
          </Route>
          <Route path="/login">
            <Login authorised={authorised} handleAuthorised={handleAuthorised} user={user} />
          </Route>
          <Route path="/">
            <Home authorised={authorised} handleAuthorised={handleAuthorised} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
