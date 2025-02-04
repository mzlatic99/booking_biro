import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-small.svg';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [burgerClass, setBurgerClass] = useState(
    `${styles.burgerBar} ${styles.unclicked}`
  );
  const [menuClass, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(`${styles.burgerBar} ${styles.clicked}`);
      setMenuClass(`${styles.menu} ${styles.visible}`);
    } else {
      setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);
      setMenuClass(`${styles.menu} ${styles.hidden}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleMenuItemClick = (id, event) => {
    event.preventDefault();
    if (isMenuClicked) {
      updateMenu();
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <a
          href='#home'
          onClick={(e) => handleMenuItemClick('home', e)}>
          {screenWidth < 600 && <SvgLogo className={styles.logoNav} />}
        </a>

        <div
          className={styles.burgerMenu}
          onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <ul className={styles.menuItems}>
          <li>
            <a
              href='#home'
              onClick={(e) => handleMenuItemClick('home', e)}>
              Home
            </a>
          </li>
          <li>
            <a
              href='#artists'
              onClick={(e) => handleMenuItemClick('artists', e)}>
              Artists
            </a>
          </li>
          <li>
            <a
              href='#info'
              onClick={(e) => handleMenuItemClick('info', e)}>
              Info
            </a>
          </li>
          <li>
            <a
              href='#form'
              onClick={(e) => handleMenuItemClick('form', e)}>
              Let's talk
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
