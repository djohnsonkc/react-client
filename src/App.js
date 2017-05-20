import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import About from './components/About';
import Login from './components/Login';

import './index.css';

//**********************************************************
// use these functions to be able to pass props to routes
//**********************************************************
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}


//**********************************************************
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      isLoggedIn: false,
      auth: {
        access_token: null,
        expires_in: null
      }
    };

    // set these up so that Login.js can pass things back up
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAuth = this.handleAuth.bind(this);

  }

  //******************************************************************
  // handlers that are passed into Login.js
  //******************************************************************
  handleEmail = (evt) => {
    console.log("email change: " + evt.target.value)
    this.setState({ email: evt.target.value });
  }

  handlePassword = (evt) => {
    console.log("password change: " + evt.target.value)
    this.setState({ password: evt.target.value });
  }

  handleAuth(results) {
    this.setState({
      email: results.email,
      firstName: results.first_name,
      isLoggedIn: results.isLoggedIn,
      auth: results.auth
    });
  }


  render() {
    return (


      <Router>
        <div>
          <NavBar isLoggedIn={this.state.isLoggedIn} email={this.state.email} />
          
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" render={()=>
              <Account all={this.state} isLoggedIn={this.state.isLoggedIn} email={this.state.email} firstName={this.state.firstName} />}
            />
            <PropsRoute path="/login" 
              component={Login} 
              email={this.state.email} 
              password={this.state.password} 
              onEmailChange={this.handleEmail} 
              onPasswordChange={this.handlePassword} 
              onAuthChange={this.handleAuth} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
