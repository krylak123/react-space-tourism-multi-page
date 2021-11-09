import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gsap from 'gsap';

// eslint-disable-next-line no-unused-vars
import styles from './Home.module.scss';

const Home = () => {
  const heading1Ref = useRef();
  const heading2Ref = useRef();
  const heading3Ref = useRef();

  useEffect(() => {
    gsap.fromTo(heading1Ref.current, { opacity: 0 }, { opacity: 1, delay: 0.3 });
    gsap.fromTo(heading2Ref.current, { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 1 });
    gsap.fromTo(heading3Ref.current, { opacity: 0 }, { opacity: 1, delay: 0.3 });
  }, []);

  return (
    <main className={classNames('home')}>
      <div className={classNames('home__wrapper')}>
        <div className={classNames('home__text-wrapper')}>
          <p ref={heading1Ref} className={classNames('home__heading-1')}>
            so, you want to travel to
          </p>
          <h1 ref={heading2Ref} className={classNames('home__heading-2')}>
            space
          </h1>
          <p ref={heading3Ref} className={classNames('home__heading-3')}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <Link to="/destination" className={classNames('home__btn')}>
          explore
        </Link>
      </div>
    </main>
  );
};

export default Home;
