import React from 'react';

import Dish from '../Dish';

import styles from './styles.module.scss';

const defaultProps = {
    title: "Hamburguesa",
    image: "images/burger.png",
    description: "Deliciosa hamburguesa de entraña",
};

const Meals = () => (
  <div className={styles.display}>
    <Dish 
        title={defaultProps.title}
        image={defaultProps.image}
        description={defaultProps.description}
    />
    <Dish 
        title={defaultProps.title}
        image={defaultProps.image}
        description={defaultProps.description}
    />
    <Dish 
        title={defaultProps.title}
        image={defaultProps.image}
        description={defaultProps.description}
    />
  </div>
);

export default Meals;