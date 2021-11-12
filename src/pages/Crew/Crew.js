/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

import PhotoCrew1 from '../../assets/crew/image-douglas-hurley.png';
import PhotoCrew2 from '../../assets/crew/image-mark-shuttleworth.png';
import PhotoCrew3 from '../../assets/crew/image-victor-glover.png';
import PhotoCrew4 from '../../assets/crew/image-anousheh-ansari.png';

import './Crew.module.scss';

const crewData = [
  {
    id: 0,
    name: 'Douglas Hurley',
    image: PhotoCrew1,
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    id: 1,
    name: 'Mark Shuttleworth',
    image: PhotoCrew2,
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    id: 2,
    name: 'Victor Glover',
    image: PhotoCrew3,
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    id: 3,
    name: 'Anousheh Ansari',
    image: PhotoCrew4,
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];

const Crew = () => {
  const [currentCrewID, setCurrentCrewID] = useState(0);

  const currentCrew = crewData.find(item => item.id === currentCrewID);

  const changeCurrentCrew = e => {
    const ID = Number(e.target.dataset.id);

    if (ID === currentCrewID) return;

    setCurrentCrewID(ID);
  };

  const crewMenuItems = crewData.map(item => (
    <li key={item.id} className="crew__slider-item">
      <button
        onClick={changeCurrentCrew}
        type="button"
        data-id={item.id}
        className={
          item.id === currentCrewID
            ? 'crew__slider-btn crew__slider-btn--active'
            : 'crew__slider-btn'
        }
      />
    </li>
  ));

  return (
    <main className="crew">
      <div className="crew__wrapper wrapper">
        <h1 className="crew__title">Meet your crew</h1>
        <div className="crew__img-container">
          <img src={currentCrew.image} alt="crew" className="crew__img" />
        </div>
        <span className="crew__line" />
        <div className="crew__details-container">
          <nav className="crew__slider">
            <ul className="crew__slider-list">{crewMenuItems}</ul>
          </nav>
          <div className="crew__text-container">
            <h1 className="crew__role">{currentCrew.role}</h1>
            <h2 className="crew__name">{currentCrew.name}</h2>
            <p className="crew__bio">{currentCrew.bio}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
