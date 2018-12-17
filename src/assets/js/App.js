import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import '../css/style.css'
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Faq from './pages/Faq';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
