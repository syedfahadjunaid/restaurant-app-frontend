import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => {
  return (
    <div className="app__wrapper app__bg section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef img" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <p className="p__opensans">
            <span>
              <img src={images.quote} alt="quote" />
              &nbsp;&nbsp;
            </span>
            I am chef, also the owner of this greatest firm of restaurant and we
            use fresh ingredient for our menu items. As our owner's word or
            mine's that you can rely on is that you cannot find fresh, mouth
            watering food nowhere else. I guarantee it.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Syed Fahad Junaid</p>
          <p className="p__opensans">Chef & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
