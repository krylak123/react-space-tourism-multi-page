import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import NavLinkItem from '../../components/NavLinkItem';

import PhotoMoon from '../../assets/destination/image-moon.png';
import PhotoMars from '../../assets/destination/image-mars.png';
import PhotoEuropa from '../../assets/destination/image-europa.png';
import PhotoTitan from '../../assets/destination/image-titan.png';

import './Destination.module.scss';

const destinationData = [
  {
    id: 0,
    path: '/destination/moon',
    name: 'moon',
    image: PhotoMoon,
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel: '3 days',
  },
  {
    id: 1,
    path: '/destination/mars',
    name: 'mars',
    image: PhotoMars,
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travel: '9 months',
  },
  {
    id: 2,
    path: '/destination/europa',
    name: 'europa',
    image: PhotoEuropa,
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travel: '3 years',
  },
  {
    id: 3,
    path: '/destination/titan',
    name: 'titan',
    image: PhotoTitan,
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travel: '7 years',
  },
];

const Destination = ({ planet }) => {
  const planetName = planet.match.params.planet;

  const currentPlanet = destinationData.find(item => item.name === planetName);

  const menuListItemsMap = destinationData.map(item => (
    <NavLinkItem
      key={item.id}
      path={item.path}
      name={item.name}
      classItem="destination__menu-item"
      classLink="destination__menu-link"
    />
  ));

  return (
    <>
      {!currentPlanet ? (
        <Redirect to="/" />
      ) : (
        <main className="destination">
          <div className="wrapper destination__wrapper">
            <h1 className="destination__title">Pick your destination</h1>
            <div className="destination__img-container">
              <img src={currentPlanet.image} alt="planet" className="destination__img" />
            </div>
            <div className="destination__details-container">
              <nav className="destination__menu">
                <ul className="destination__menu-list">{menuListItemsMap}</ul>
              </nav>
              <h2 className="destination__planet-name">{currentPlanet.name}</h2>
              <p className="destination__planet-desc">{currentPlanet.desc}</p>
              <span className="destination__line" />
              <div className="destination__values-container">
                <div className="destination__value-container">
                  <p className="destination__planet-detail">avg. ditance</p>
                  <p className="destination__planet-value">{currentPlanet.distance}</p>
                </div>
                <div className="destination__value-container">
                  <p className="destination__planet-detail">est. travel time</p>
                  <p className="destination__planet-value">{currentPlanet.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

Destination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  planet: PropTypes.object.isRequired,
};

export default Destination;
