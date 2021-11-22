import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ path, name, classItem, classLink, toggler }) => (
  <li className={classItem}>
    <NavLink
      exact
      to={path}
      className={classLink}
      activeClassName={`${classLink}--active`}
      onClick={toggler}
    >
      {name}
    </NavLink>
  </li>
);

NavLinkItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classItem: PropTypes.string.isRequired,
  classLink: PropTypes.string.isRequired,
  toggler: PropTypes.func,
};

NavLinkItem.defaultProps = {
  toggler: null,
};

export default NavLinkItem;
