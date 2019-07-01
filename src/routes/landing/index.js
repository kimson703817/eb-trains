import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <Link to="/browse/trains">Train Tracker</Link>
      </div>
    );
  }
}

export default Landing;
