import React from 'react';

import NavBar from '../NavBar';
import Menu from '../Menu';
import styles from './styles.module.scss';

const Main = () => (
  <div className={styles.content}>
    <NavBar />
    <Menu />
  </div>
);

export default Main;