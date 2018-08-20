import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import Banner from './views/Banner';
import Music from './views/Music';
import Calendar from './views/Calendar';
import Social from './views/Social';
import Contact from './views/Contact';
import APIManager from './managers/APIManager'

class App extends Component {

  state = {
    bandsintownEvents: []
  }

  componentDidMount() {
    APIManager.getBandsintownEvents()
      .then(r => r.json())
      .then(response => {
        this.setState({ bandsintownEvents: response })
      })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
        <Music />
        <Calendar 
          events={this.state.bandsintownEvents}
        />
        <Contact />
        <Social />
      </React.Fragment>
    );
  }
}

export default App;
