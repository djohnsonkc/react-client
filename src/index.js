import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';

import './index.css';


// const Header = () => <h1>I'm a header</h1>;

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contacts} />
  </div>
);



const App = () => (
  <Router>
    <div>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
