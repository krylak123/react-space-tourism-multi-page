import React from 'react';
import classNames from 'classnames';

// eslint-disable-next-line no-unused-vars
import styles from './Home.module.scss';

const Home = () => {
  console.log('home component');

  return (
    <main className={classNames('home')}>
      <div className={classNames('home__wrapper')}>
        <div className={classNames('home__text-wrapper')}>
          <p className={classNames('home__heading-1')}>so, you want to travel to</p>
          <h1 className={classNames('home__heading-2')}>space</h1>
          <p className={classNames('home__heading-3')}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <button type="button" className={classNames('home__btn')}>
          explore
        </button>
      </div>
    </main>
  );
};

export default Home;
