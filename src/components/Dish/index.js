import React from 'react';

import styles from './styles.module.scss';

const DESCRIPTION = 'Descripción';

const Dish = ({title, image, description}) => (
  <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.img} src={image} alt="dish_display" />
      <h3 className={styles.descriptionTitle}>{DESCRIPTION}</h3>
      <hr class={styles.ruler} />
      <p className={styles.description}>{description}</p>
  </div>
);

export default Dish;