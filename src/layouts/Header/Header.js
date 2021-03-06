import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import Navigation from '../Navigation/Navigation';

import Logo from '../../assets/shared/logo.svg';
import OpenMenu from '../../assets/shared/icon-hamburger.svg';

import './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const vpOrientLand = window.matchMedia('(orientation: landscape)');

  const logoRef = useRef();

  const handleOnToggleMenu = () => {
    setIsMenuOpen(prevValue => !prevValue);
  };

  useEffect(() => {
    vpOrientLand.addEventListener('change', () => setIsMenuOpen(false));

    gsap.to(logoRef.current, { rotate: '+=360', duration: 1, delay: 0.5 });
  }, []);

  return (
    <header className="header">
      <div className="header__logo-container">
        <img ref={logoRef} className="header__logo" src={Logo} alt="logo icon" />
      </div>
      <Navigation toggler={handleOnToggleMenu} isOpen={isMenuOpen} />
      <button type="button" className="header__toggler-container" onClick={handleOnToggleMenu}>
        <img className="header__toggler" src={OpenMenu} alt="toggler icon" />
      </button>
    </header>
  );
};

export default Header;
