import React from 'react';
import { homeURL } from '../config';

import Clock from '../components/Clock';

const InfoNav = props => (
  <nav className="navbar navbar-expand-md navbar-light">
    <a className="col-sm-3" href={homeURL} rel="home">
      <img
        style={{ height: '2.1rem', width: 'auto' }}
        src="https://www.energybox.com/wp-content/uploads/energybox_logo-1.svg"
        alt="app-logo"
      />
    </a>
    <div className="col-sm-6" />
    <Clock className="col-sm-2" />
  </nav>
);

export default InfoNav;
