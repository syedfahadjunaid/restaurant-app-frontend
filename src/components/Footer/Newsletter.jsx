import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter Your Email Address" />
        <button className="custom__button">Send</button>
      </div>
    </div>
  );
};

export default Newsletter;
