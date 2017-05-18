import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';

import './index.css';


const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contacts} />
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
