import React from 'react';
import './tusker.css';
import productImage from './images/ad1.png'; 
import share from './images/share.svg';
import arrow1 from './images/arrow1.svg';

function Tusker() {
  return (
    <div className='tusk'>
      <img 
        src={productImage} 
        alt="AD Tusker Guttapusalu" 
        className="product-image"
      />
      <div className="ohbyozy-text">OHBYOZY</div>
      <div className="star-rating">
        ★★★★★ <span className="reviews-count">(45)</span>
      </div>
      <div className="product-name2">AD Tusker Guttapusalu</div>
      <div className="first-price">Rs.2500</div>
      <div className="product-price1">Rs.1,899</div>
      <button className='button2'>Sale</button>
      <div className="tax-shipping-info">Tax included. <u>Shipping</u> calculated at checkout.</div>
      
      <div className="product-options">
      
        <label className="color-label">Color:Red</label>


        <div className="color-circle light-green"><div className='line1'></div>
</div>
        <div className="color-circle red"><div className='line2'></div>
</div>
        <div className="color-circle white"><div className='line3'></div>
</div>
        <div className="quantity">
          <p className='q'>Quantity</p>
  <button className="minus-btn">-</button>
  <input type="number" id="quantity" name="quantity" defaultValue="1" />
  <button className="plus-btn">+</button>
</div>
      </div>
      
      <div className="product-buttons">
        <button className="add-to-cart">Add to cart</button>
        <button className="buy-now">Buy it now</button>
      </div>
      <div className='share'>
        <div className='share1'>
          <img 
            src={share} 
            alt="Share" 
            className="share2"
          />
          <div className='text12'>Share</div>
        </div>
      </div>
      <div className='details'>
        <div className='text13'>View full details</div>
        <img 
          src={arrow1} 
          alt="Arrow" 
          className="share3"
        />
      </div>
    </div>
  );
}

export default Tusker;
