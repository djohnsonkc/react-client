import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import About from './components/About';
import Login from './components/Login';

import './index.css';


const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
