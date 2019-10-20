import React from 'react';

import styles from './styles.module.scss';

const Beverage = ({ title, image }) => (
  <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.img} src={image} alt="beverage_display" />
  </div>
);

export default Beverage;