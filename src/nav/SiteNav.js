import React from 'react';

// NPM MODULE
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

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

const EBNav = link => (
  <li key={shortid.generate()} className="nav-item">
    <NavLink className="nav-link" to={link.to} activeClassName="active">
      {link.routeName}
    </NavLink>
  </li>
);

const SiteNav = () => (
  <div
    style={{ height: '1rem', fontSize: '0.98rem' }}
    className="navbar navbar-expand-md navbar-light"
  >
    <div className="col-sm-6" />
    <div className="col-sm-6">
      <ul className="navbar-nav mx-auto">{links.map(EBNav)}</ul>
    </div>
  </div>
);

export default SiteNav;
