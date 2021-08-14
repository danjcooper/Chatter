import React from "react";
import styles from "./style.module.css";

const Nav = () => {
  return (
    <nav>
      <a className={styles.links} href="#">I'm a link</a>
      <a className={styles.links} href="#">I'm a link</a>
      <a className={styles.links} href="#">I'm a link</a>
      <a className={styles.links} href="#">I'm a link</a>
    </nav>
  );
};

export default Nav;
