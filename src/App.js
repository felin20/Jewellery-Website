import React from 'react';
import './App.css';
import Header from './Header';
import BestSeller from './bestseller';
import SpecialOffer from './special';
import Tusker from './tusker';
import OurStory from './Ourstory';
import CustomerTestimonials from './testimonials';
import Footer from './footer';
import Category from './category';
import Content from './content';
// Import images
import icon1 from './images/Vector.png';
import image1 from './images/image.png';
import image2 from './images/Vector1.svg';
import image3 from './images/Vector2.svg';

import shop from './images/shop.png';


// Header Component
// function Header() {
//   return (
//     <div className="header">
//       <img
//         src={icon1}
//         alt="Icon 1"
//         className="icon1"
//       />
//       <img
//         src={image1}
//         alt="Image 1"
//         className="image1"
//       />
//       <svg className="image2" xmlns="http://www.w3.org/2000/svg" width="20" height="21.25" viewBox="0 0 20 21.25">
//         <path fill="#000" d="M10 0L20 21.25H0z"/>
//       </svg>
//       <svg className="image3" xmlns="http://www.w3.org/2000/svg" width="20" height="21.25" viewBox="0 0 20 21.25">
//         <path fill="#000" d="M10 0L20 21.25H0z"/>
//       </svg>
//     </div>
//   );
// }

// Content Component

// Category Component

// BestSeller Component

// App Component
function App() {
  return (
    <div className="App">
      <div className="frame-container">
        <Header />
        <Content />
        <Category />
        <BestSeller />
        <SpecialOffer />
        <Tusker />
        <OurStory />
        <CustomerTestimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
