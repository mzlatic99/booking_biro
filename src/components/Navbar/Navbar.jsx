import React, { useState } from "react";
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo-small.png';

const Navbar = () => {
  // State hooks
  const [burgerClass, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`);
  const [menuClass, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Toggle burger menu
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

  return (
    <div style={{ width: '100%'}}>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} alt="Logo" style={{textAlign: "center"}}></img>
        <div className={styles.burgerMenu} onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <ul className={styles.menuItems}>
            <li>Home</li>
            <li>Artists</li>
            <li>Let's talk</li>
            <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
