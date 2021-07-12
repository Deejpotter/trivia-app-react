import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Trivia from './components/Trivia';
import Answers from './components/Answers';


function App() {
  const [authorised, setAuthorised] = useState(false)

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
      handleAuthorised(true);
      netlifyIdentity.close();
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
        <AuthButton authorised={authorised} handleAuthorised={handleAuthorised} />
        <Switch>
          <Route path="/trivia" component={Trivia} />
          <PrivateRoute path="/answers" component={Answers} authorised={authorised} handleAuthorised={handleAuthorised} />
          <Route path="/login" component={Login} authorised={authorised} handleAuthorised={handleAuthorised} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const netlifyAuth = {
  authenticate() {
    netlifyIdentity.open();
  },
  signout() {
    netlifyIdentity.logout();
  }
};

function AuthButton({ authorised, handleAuthorised }) {

  const history = useHistory();

  if (authorised) {
    return (
      <p>
        Welcome!{' '}
        <button
          onClick={() => netlifyAuth.signout(() => history.push('/'))}
        >
          Sign out
        </button>
      </p>
    )
  } else {
    return <p>You are not logged in.</p>;
  }
}

function PrivateRoute({ component: Component, authorised, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authorised ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
                pathname: '/login',
                state: {
                  from: props.history.location,
                  authorised: authorised
                }
            }}
          />
        )
      }
    />
  );
}

function Login(props) {

  const history = useHistory();

  if (props.authorised) {
    history.push(props.location.state.from.path);
  }
  return (
    <div>
      <p>You must log in to view the page at {props.location.state.from.path}</p>
      <button onClick={(props) => {
        netlifyAuth.authenticate(() => {
          console.log(props.location.state.from.pathname);
        });
      }}>Log in</button>
    </div>
  );
}

export default App;
