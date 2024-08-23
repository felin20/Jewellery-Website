import React from 'react';
import './special.css';
import offerImage from './images/offer.png'; // Update with the correct path to the image

function SpecialOffer() {
  return (
    <div className="special-offer-container">
      <div className="special-offer-title"><u>Special Offer</u></div>
      <div className='container2'>
      <div className="special-offer-card">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="special-offer-card1">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details1">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>


      <div className="special-offer-card2">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>


      <div className="special-offer-card3">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details3">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>


      <div className="special-offer-card4">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="special-offer-card5">
        <img 
          src={offerImage} 
          alt="2 Layer Necklace" 
          className="offer-image"
        />
        <div className="offer-details5">
          <div className="offer-product-name">2 Layer Necklace</div>
          <div className="offer-product-price">
            <span className="offer-current-price">Rs.2000</span>
            <span className="offer-original-price">Rs.2800</span>
          </div>
          <button className="offer-add-to-cart">Add to Cart</button>
        </div>
      </div>
</div>
      
    </div>
  );
}

export default SpecialOffer;
