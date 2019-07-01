import React, { Component } from 'react';

// ROUTES
import Landing from './routes/landing';
import BrowseTrains from './routes/browse/BrowseTrains';

// NAV
import NavBar from './nav/NavBar';

// NPM modules
import { BrowserRouter, Route } from 'react-router-dom';

/*
  Routes:
  /
  /browse/trains
  /browse/trains/:id
*/

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/browse/trains" component={BrowseTrains} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// User Stories:

// As a user I'd like to be able to see all the trains!
// As a user I'd like to be able to filter by train line color.
// As a user I'd like to be able to filter by different service types.
// As a user I'd like to be able to filter by car count.
// As a user I'd like to be able to visually distinguish trains on different colored lines from each other.
// As a user I'd like to be able to visually distinguish between different car counts.
// As a user I'd like to be able to distinguish trains by different service types.
// As a user I'd like to see the page automatically update as the trains' positions update
