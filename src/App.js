import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Trivia from './components/Trivia';
import Answers from './components/Answers';
import Login from './components/Login';
import LoginButton from './components/LoginButton';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/trivia">
            <Trivia />
          </Route>
          {/* <Route path="/answers" component={Answers} /> */}
          <Route path="/login" component={LoginButton} authorised={false} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route {...rest} render={props => netlifyAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//       )
//       }
//     />
//   );
// }

// class Login extends React.Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     netlifyAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true }) 
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: '/' } };
//     let { redirectToReferrer } = this.state;

//     if (redirectToReferrer) return <Redirect to={from} />;

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

export default App;
