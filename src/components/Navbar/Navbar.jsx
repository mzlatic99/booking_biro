import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-small.svg';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
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

  const handleMenuItemClick = () => {
    if (isMenuClicked) {
      updateMenu();
    }
  };

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <NavLink to='/'>
          {!(isHomePage && screenWidth >= 600) && (
            <SvgLogo className={[styles.logoNav]} />
          )}
        </NavLink>

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
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['inactive-link']
              }
              onClick={handleMenuItemClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/artists'
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['inactive-link']
              }
              onClick={handleMenuItemClick}>
              Artists
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/info'
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['inactive-link']
              }
              onClick={handleMenuItemClick}>
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/form'
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles['inactive-link']
              }
              onClick={handleMenuItemClick}>
              Let's talk
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
