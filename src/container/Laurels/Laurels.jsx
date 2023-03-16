import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { data } from '../../constants';

import './Laurels.css';

const Laurels = () => {
  const renderedLaurelContent = data.awards.map((award) => {
    return (
      <div className="app__laurels_awards-card" key={award.title}>
        <img src={award.imgUrl} alt="award img" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>
            {award.title}
          </p>
          <p
            className="p__cormorant"
            style={{ fontStyle: 'italic', color: 'gray' }}
          >
            {award.subtitle}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="app__wrapper app__bg section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">{renderedLaurelContent}</div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels img" />
      </div>
    </div>
  );
};

export default Laurels;
