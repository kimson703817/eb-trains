import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { WMATA } from '../keys';

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

class Landing extends Component {
  render() {
    return (
      <div>
        <Link to="/browse/trains">View all active trains</Link>
      </div>
    );
  }
}

export default Landing;
