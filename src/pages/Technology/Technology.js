import React, { useEffect, useState } from 'react';

import PhotoTech1Port from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import PhotoTech1Land from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import PhotoTech2Port from '../../assets/technology/image-spaceport-portrait.jpg';
import PhotoTech2Land from '../../assets/technology/image-spaceport-landscape.jpg';
import PhotoTech3Port from '../../assets/technology/image-space-capsule-portrait.jpg';
import PhotoTech3Land from '../../assets/technology/image-space-capsule-landscape.jpg';

import './Technology.module.scss';

const technologyData = [
  {
    id: 0,
    name: 'Launch vehicle',
    images: {
      portrait: PhotoTech1Port,
      landscape: PhotoTech1Land,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 1,
    name: 'Spaceport',
    images: {
      portrait: PhotoTech2Port,
      landscape: PhotoTech2Land,
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  {
    id: 2,
    name: 'Space capsule',
    images: {
      portrait: PhotoTech3Port,
      landscape: PhotoTech3Land,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const vpLandscape = window.matchMedia('(orientation: landscape)');

  const [currentTechID, setCurrentTechID] = useState(0);
  const [isLandscape, setIsLandscape] = useState(vpLandscape.matches);

  const currentTech = technologyData.find(item => item.id === currentTechID);

  const changeCurrentTech = e => {
    const ID = Number(e.target.dataset.id);

    if (ID === currentTechID) return;

    setCurrentTechID(ID);
  };

  const techMenuItems = technologyData.map((item, index) => (
    <li key={item.id} className="tech__menu-item">
      <button
        onClick={changeCurrentTech}
        type="button"
        data-id={item.id}
        className={
          item.id === currentTechID ? 'tech__menu-btn tech__menu-btn--active' : 'tech__menu-btn'
        }
      >
        {index + 1}
      </button>
    </li>
  ));

  useEffect(() => {
    vpLandscape.addEventListener('change', () => setIsLandscape(vpLandscape.matches));
  });

  return (
    <main className="tech">
      <div className="tech__wrapper wrapper">
        <h1 className="tech__title">Space launch 101</h1>
        <div className="tech__img-container">
          <img
            src={isLandscape ? currentTech.images.portrait : currentTech.images.landscape}
            alt="rocket"
            className="tech__img"
          />
        </div>
        <div className="tech__info-container">
          <nav className="tech__menu">
            <ul className="tech__menu-list">{techMenuItems}</ul>
          </nav>
          <div className="tech__text-container">
            <p className="tech__subtitle">The terminology...</p>
            <h1 className="tech__name">{currentTech.name}</h1>
            <p className="tech__desc">{currentTech.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
