import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => {
  const renderedWines = data.wines.map((wine, index) => {
    return (
      <MenuItem
        key={wine.title + index}
        title={wine.title}
        price={wine.price}
        tags={wine.tags}
      />
    );
  });
  const renderedCocktails = data.cocktails.map((cocktail, index) => {
    return (
      <MenuItem
        key={cocktail.title + index}
        title={cocktail.title}
        price={cocktail.price}
        tags={cocktail.tags}
      />
    );
  });
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your pallette" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">{renderedWines}</div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktail flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">{renderedCocktails}</div>
        </div>
      </div>

      <div className="btn" style={{ marginTop: '15px' }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
