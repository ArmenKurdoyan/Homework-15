import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div className="users-albums">
            <Route path="/" component={Users}/>
            <Route path="/users/:userId/" component={Albums}/>
          </div>
            <Route path="/users/:userId/albums/:albumId/" component={Photos}/>
        </div>
      </Router>
    );
  }
}

export default App;
