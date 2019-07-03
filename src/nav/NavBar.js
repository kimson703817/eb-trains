import React, { Component } from 'react';

// Components
import InfoNav from './InfoNav';
import SiteNav from './SiteNav';

class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          height: '4.7rem',
          borderBottom: 'thin solid #d7d7d7'
        }}
      >
        <div className="container">
          <InfoNav />
          <SiteNav />
        </div>
      </div>
    );
  }
}

export default NavBar;
