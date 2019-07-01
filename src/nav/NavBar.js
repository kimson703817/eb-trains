import React, { Component } from 'react';

// Components
import Clock from '../components/Clock';

// CONFIG
import { homeURL } from '../config';

// NPM MODULE
import { NavLink } from 'react-router-dom';

// APP NAVIGATION ROUTES
const links = [
  {
    routeName: 'Train Tracker',
    to: '/browse/trains'
  },
  {
    routeName: 'Technology',
    to: '/technology'
  },
  {
    routeName: 'Company',
    to: '/company'
  },
  {
    routeName: 'Contact Us',
    to: '/contact'
  }
];

class NavBar extends Component {
  renderInfo = () => (
    <nav className="navbar navbar-expand-md navbar-light">
      {this.renderLogo()}
      <div className="col-sm-6" />
      <Clock className="col-sm-2" />
    </nav>
  );

  renderLogo = () => (
    <a className="col-sm-3" href={homeURL} rel="home">
      <img
        style={{ height: '2.1rem', width: 'auto' }}
        src="https://www.energybox.com/wp-content/uploads/energybox_logo-1.svg"
      />
    </a>
  );

  renderNav = () => (
    <div
      style={{ height: '1rem', fontSize: '0.98rem' }}
      className="navbar navbar-expand-md navbar-light"
    >
      <div className="col-sm-6" />
      <div className="col-sm-6">
        <ul className="navbar-nav mx-auto">{links.map(this.renderNavLink)}</ul>
      </div>
    </div>
  );

  renderNavLink = link => (
    <li className="nav-item">
      <NavLink className="nav-link" to={link.to} activeClassName="active">
        {link.routeName}
      </NavLink>
    </li>
  );

  render() {
    return (
      <div
        style={{
          height: '4.7rem',
          borderBottom: 'thin solid #d7d7d7'
        }}
      >
        <div className="container">
          {this.renderInfo()}
          {this.renderNav()}
        </div>
      </div>
    );
  }
}

export default NavBar;
