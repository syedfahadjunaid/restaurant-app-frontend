import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useRef } from 'react';

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === 'left'
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  };

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const renderedImages = galleryImages.map((image, index) => {
    return (
      <div
        key={`gallery-image-${index + 1}`}
        className="app__gallery-images_card flex__center"
      >
        <img src={image} alt="gallery img" />
        <BsInstagram className="gallery__image-icon" />
      </div>
    );
  });

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ style: '#AAA', marginTop: '2rem', textAlign: 'justify' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error
          voluptate quia, fugiat tempore perferendis quos illo tempora qui
          aperiam odit laborum. Magnam dolorum adipisci, nobis animi rerum eum
          voluptatem.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {renderedImages}
        </div>
        <div className="app__galery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
