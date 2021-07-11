import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Trivia from './components/Trivia';
import Answers from './components/Answers';


function App() {
  const [authorised, setAuthorised] = useState(false)
  function handleAuthorised(value) {
    setAuthorised(value);
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <AuthButton />
        <Switch>
          <Route path="/trivia" component={Trivia} />
          <PrivateRoute path="/answers" component={Answers} />
          <Route path="/login" component={Login} authorised={authorised} handleAuthorised={handleAuthorised} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    if (!this.isAuthenticated) {
      netlifyIdentity.open();
      netlifyIdentity.on('login', user => {
        this.user = user;
        this.isAuthenticated = true;
        callback(user);
      });
    } else {
      <Redirect to="/" />
    }
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.isAuthenticated = false;
      this.user = null;
      callback();
    });
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Login({ authorised, handleAuthorised, from}) {

  const login = () => {
    netlifyAuth.authenticate((user) => {
      handleAuthorised(true);
      console.log(user);

    });
  };

  if (authorised) return <Redirect to={from} />;

  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
