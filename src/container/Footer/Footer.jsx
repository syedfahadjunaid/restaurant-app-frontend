import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-trademark">
        <p className="p__opensans" style={{ marginTop: '2rem' }}>
          2023 SYEDFAHADJUNAID, All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
