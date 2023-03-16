import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            I am Syed Fahad Junaid, the owner of this finest restaurant chain, I
            got the idea about this chain from various reason and first of all
            it is food
          </p>
          <button className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" className="knife__img" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Our history is not much of history because our dining is opened this
            year and it is successfull hit in every state of India. Just go and
            enjoy.
          </p>
          <button className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
