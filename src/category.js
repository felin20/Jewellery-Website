import React, { useState } from 'react';
import './category.css';  // Assuming you have a CSS file for styling
import necklace from './images/necklace.png';
import haaram from './images/haaram.png';
import earrings from './images/earrings.png';
import bridal from './images/bridal.png';
import adStone from './images/AD.png';
import maang from './images/maang.png';
import Bangles from './images/Bangles & Braclets.png';
import Hipbelts from './images/Hipbelts.png';
import Hair  from './images/Hair Accessories.png';
import Anklets  from './images/Anklets.png';
import Matti  from './images/Matti.png';
import Nose  from './images/Nose Accesories.png';



import smallImage from './images/small-image.png';
import whats from './images/whats.png';

function Category() {
  const [page, setPage] = useState(1);

  const categories = {
    1: [
      { img: necklace, label: 'Necklace' },
      { img: haaram, label: 'Haarams' },
      { img: earrings, label: 'Earrings' },
      { img: bridal, label: 'Bridal Combo' },
      { img: adStone, label: 'AD Stone Jewellery' },
      { img: maang, label: 'Maangtikkas' },
    ],
    2: [
      { img: Bangles, label: 'Bangles & Braclets' },
      { img: Hipbelts, label: 'Hipbelts' },
      { img: Hair, label: 'Hair Accessories' },
      { img: Anklets, label: 'Anklets' },
      { img: Matti, label: 'Matti' },
      { img: Nose, label: 'Nose Accesories' },
    ]
  };

  const handleNextPage = () => {
    setPage(prevPage => (prevPage === 1 ? 2 : 1));
  };

  return (
    <div className="category-container">
      <div className="category-row first-row">
        {categories[page].slice(0, 3).map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.img} alt={category.label} className="category-image" />
            <div className="category-label">{category.label}</div>
          </div>
        ))}
      </div>
      <div className="category-row second-row">
        {categories[page].slice(3, 6).map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.img} alt={category.label} className="category-image" />
            <div className="category-label">{category.label}</div>
          </div>
        ))}
      </div>
      <button className="circle-button" onClick={handleNextPage}>
        <div className="circle">
          <img src={smallImage} alt="Small Icon" className="circle-image" />
        </div>
      </button>
      <img src={whats} alt="WhatsApp Icon" className="whats" />
    </div>
  );
}

export default Category;
