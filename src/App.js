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
          
            <Route path="/" component={Users}/>
            <Route path="/users/:userId/" component={Albums}/>
            <Route path="/users/:userId/albums/:albumId/" component={Photos}/>

          {/* <div className="users-albums">
          
            <div className="users">
              <Link to="/users"><div>Users</div></Link>
              <Route path="/users" component={Users} />
            </div>

            <div className="albums">
              <Route path="/users/:userId" component={Albums} />
            </div>
          </div>

          <div className="photos">
            <Route path="/albums/:albumId" component={Photos} />
          </div> */}

        </div>
      </Router>
    );
  }
}

export default App;
