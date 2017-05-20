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
      userName: 'djohnsonkc',
      password: '',
      firstName: '',
      auth: null
    };

    this.handleAuth = this.handleAuth.bind(this);

  }

  handleAuth(results) {
    this.setState({
      firstName: results.first_name,
      auth: results.access_token
    });
  }


  render() {
    return (


      <Router>
        <div>
          <NavBar firstName={this.state.firstName} />
          
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <PropsRoute path="/login" 
              component={Login} 
              userName={this.state.userName} 
              password={this.state.password} 
              onAuthChange={this.handleAuth} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
