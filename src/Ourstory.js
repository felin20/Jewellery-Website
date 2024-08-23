// src/components/OurStory.js
import React from 'react';
import './Ourstory.css'; // Ensure this file is created for styling
import image5 from './images/image5.png';
function OurStory() {
  return (
    <div className="our-story-container">
      <div className="our-story-title">Our Story</div>
      <div className="our-story-content">
        <p className="our-story-text">
        At Ohbyozy, our journey began with a vision to blend timeless elegance with innovative design elements. Founded in 2000, our brand started from a dream to create jewelry that not only dazzles but also resonates deeply with the wearer’s personal story. What began as a small, passionate endeavor has grown into a celebrated name in the jewelry industry, built on a foundation of craftsmanship, creativity, and commitment.
From our earliest designs to our latest collections, every piece reflects our dedication to marrying classic beauty with modern sophistication. Our brand-building journey has been marked by a relentless pursuit of excellence and a desire to redefine what jewelry can represent. Each milestone we achieve is a testament to our unwavering commitment to quality, innovation, and customer satisfaction.
Trust and personal connection are at the heart of our brand. We take pride in upholding the highest standards of craftsmanship, ensuring every piece meets our rigorous quality assurance processes. Our transparency and exceptional service have earned us the trust of a growing community of customers, who see our jewelry not just as adornments but as meaningful symbols of their most cherished moments.
As we continue to evolve and expand, our mission remains clear: to transform life’s milestones into timeless treasures through exquisite design and heartfelt care. Join us on this journey and experience how Ohbyozy can make your special occasions unforgettable.        </p>
</div><img 
          src={image5}
          alt="Our Story" 
          className="our-story-image"
        />
      
    </div>
  );
}

export default OurStory;
