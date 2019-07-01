import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        Landing page under construction. Please check out the{' '}
        <Link to="/browse/trains">Train Tracker</Link>
      </div>
    );
  }
}

export default Landing;
