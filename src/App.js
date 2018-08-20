import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import Banner from './views/Banner';
import Music from './views/Music';
import Calendar from './views/Calendar';
import Social from './views/Social';
import Contact from './views/Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
        <Music />
        <Calendar />
        <Contact />
        <Social />
      </React.Fragment>
    );
  }
}

export default App;
