import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img className="spoon__image" src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
