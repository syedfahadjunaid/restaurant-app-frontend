import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="CHASE THE NEW FLAVOUR" />
        <h1 className="app__header-h1">Here is the finest dining</h1>
        <p className="p__opensans">
          At our dining you can find the varities of fooding and dining facities
          that you may not going to find other places but it's our opinion
          because you can go wherever you want and eat whatever you eat... but
          try us we haven't disappointed anyone.
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
