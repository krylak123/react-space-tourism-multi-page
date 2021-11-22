/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import CloseOpen from '../../assets/shared/icon-close.svg';

import './Navigation.module.scss';

const menuListItems = [
  {
    id: 0,
    path: '/',
    name: '00 home',
  },
  {
    id: 1,
    path: '/destination/moon',
    name: '01 destination',
  },
  {
    id: 2,
    path: '/crew',
    name: '02 crew',
  },
  {
    id: 3,
    path: '/technology',
    name: '03 technology',
  },
];

const Navigation = ({ toggler, isOpen }) => {
  const menuListItemsMap = menuListItems.map(item => (
    <li key={item.id} className="menu__list-item">
      <NavLink
        exact
        to={item.path}
        className="menu__list-link"
        activeClassName="menu__list-link--active"
        onClick={toggler}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  const handleOnClickOutOfNav = e => {
    if (e.target.tagName === 'NAV') toggler();
  };

  return (
    <nav onClick={handleOnClickOutOfNav} className={classNames('menu', { 'menu--active': isOpen })}>
      <button
        type="button"
        className="header__toggler-container menu__toggler-container"
        onClick={toggler}
      >
        <img className="header__toggler" src={CloseOpen} alt="toggler icon" />
      </button>
      <ul className="menu__list">{menuListItemsMap}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  toggler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
