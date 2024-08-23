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
