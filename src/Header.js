import React from 'react';
import './Header.css';

import icon1 from './images/Vector.svg';
import image1 from './images/image.png';
import image2 from './images/Vector1.svg';
import image3 from './images/Vector2.svg';

function Header() {
  return (
    <div className="header">
        <img
          src={icon1}
          alt="Icon 1"
          className="icon1"
          
        />
      
      <img
        src={image1}
        alt="Image 1"
        className="image1"
      />
      <button className="image2-button">
        <img
          src={image2}
          alt="Image 2"
          className="image2"
        />
      </button>
      <button className="image3-button">
        <img
          src={image3}
          alt="Image 3"
          className="image3"
        />
      </button>
    </div>
  );
}

export default Header;
