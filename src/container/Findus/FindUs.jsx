import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <div className="app__wrapper section__padding app__bg" id="contact">
      <div className="app__wrapper-info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <div style={{ fontStyle: 'italic' }}>
          <p className="p__opensans">
            Nowhere, Uttar Pradesh, India, Asia, Earth
          </p>
          <div style={{ margin: '2rem 0' }}>
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>
              Opening Hours
            </p>
            <p className="p__opensans" style={{ color: 'grey' }}>
              Mon - Fri 10:00 am - 02:00 am
            </p>
            <p className="p__opensans" style={{ color: 'grey' }}>
              Sat - Sun 10:00 am - 03:00 am
            </p>
          </div>
          <button type="button" className="custom__button">
            Visit Us
          </button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus img" style={{ width: '50%' }} />
      </div>
    </div>
  );
};

export default FindUs;
