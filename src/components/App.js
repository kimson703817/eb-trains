import React, { Component } from 'react';

import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { WMATA } from '../keys';

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
  /train/browse/all
  /train/browse/:id
  /



*/

class App extends Component {
  async componentDidMount() {
    const req = {
      method: 'get',
      url: `http://api.wmata.com/trainpositions/trainpositions?contentType=json`,
      headers: { api_key: `${WMATA.api_key}` }
    };

    try {
      const res = await axios(req);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(WMATA);
    return <div>hello</div>;
  }
}

export default App;
