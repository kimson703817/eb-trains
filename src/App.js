import React, { Component } from 'react';

// NPM modules
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import Landing from './routes/landing';
import BrowseTrains from './routes/browse/BrowseTrains';

import { WMATA } from './config';

// User Stories:

// As a user I'd like to be able to see all the trains!
// As a user I'd like to be able to filter by train line color.
// As a user I'd like to be able to filter by different service types.
// As a user I'd like to be able to filter by car count.
// As a user I'd like to be able to visually distinguish trains on different colored lines from each other.
// As a user I'd like to be able to visually distinguish between different car counts.
// As a user I'd like to be able to distinguish trains by different service types.
// As a user I'd like to see the page automatically update as the trains' positions update

/*
  Routes:
  /
  /browse/trains
  /browse/trains/:id
  /



*/

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={Landing} />
          <Route exact path="/browse/trains" component={BrowseTrains} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
