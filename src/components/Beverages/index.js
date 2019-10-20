import React from 'react';

import Beverage from '../Beverage';

const defaultProps = {
    title: "Coca-cola",
    image: "images/coca-cola.png",
};

const Beverages= () => (
  <div>
    <Beverage 
        title={defaultProps.title}
        image={defaultProps.image}
    />
    <Beverage 
        title={defaultProps.title}
        image={defaultProps.image}
    />
    <Beverage 
        title={defaultProps.title}
        image={defaultProps.image}
    />
  </div>
);

export default Beverages