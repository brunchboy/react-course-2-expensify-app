import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Dashboard
    </NavLink>{' '}
    &nbsp;
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>{' '}
    &nbsp;
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;