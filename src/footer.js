import React, { useState } from 'react';
import './footer.css';
import face from './images/face.png';
import TwitterX from './images/TwitterX.png';
import insta from './images/Instagram.png';
import app from './images/app.png';
import play from './images/play.png';
import visa from './images/visa.png';
import mastercard from './images/mastercard.png';
import paypal from './images/paypal.png';
import maestro from './images/maestro.png';
import rupay from './images/rupay.png';
import axis from './images/axis.png';

const Footer = () => {
  const [isUsefulExpanded, setUsefulExpanded] = useState(false);
  const [isInfoExpanded, setInfoExpanded] = useState(false);
  const [isContactExpanded, setContactExpanded] = useState(false);

  return (
    <div className="footer-container">
      
      <div className="footer-section footer-section-useful">
        <p className="text9">Useful Links</p>
        <button
          className="expand-button"
          onClick={() => setUsefulExpanded(!isUsefulExpanded)}
        >
          {isUsefulExpanded ? '-' : '+'}
        </button>
      </div>
      {isUsefulExpanded && (
        <div className="expanded-links">
          <a href="/link1" className="footer-link-useful">Home</a>
          <a href="/link2" className="footer-link-useful">Shop</a>
          <a href="/link3" className="footer-link-useful">Offers</a>
        </div>
      )}

      
      <div className="footer-section footer-section-info">
        <p className="text9">Information</p>
        <button
          className="expand-button"
          onClick={() => setInfoExpanded(!isInfoExpanded)}
        >
          {isInfoExpanded ? '-' : '+'}
        </button>
      </div>
      {isInfoExpanded && (
        <div className="expanded-links">
          <a href="/info1" className="footer-link-info">About Us</a>
          <a href="/info2" className="footer-link-info">FAQs</a>
          <a href="/info3" className="footer-link-info">Shipping Information</a>
        </div>
      )}

    
      <div className="footer-section footer-section-contact">
        <p className="text9">Contact Us</p>
        <button
          className="expand-button"
          onClick={() => setContactExpanded(!isContactExpanded)}
        >
          {isContactExpanded ? '-' : '+'}
        </button>
      </div>
      {isContactExpanded && (
        <div className="expanded-links">
          <a href="/contact1" className="footer-link-contact">Customer Support</a>
          <a href="/contact2" className="footer-link-contact">Email Us</a>
          <a href="/contact3" className="footer-link-contact">Call Us</a>
        </div>
      )}
<div className='container100'>
      
      <p className='text11'>Follow Us On</p>
      <div className='container71'>
        <img src={face} alt="Facebook" className="image6" />
        <img src={TwitterX} alt="Twitter" className="image7" />
        <img src={insta} alt="Instagram" className="image8" />
      </div>
      <div className='download'>
        Download the Ohbyozy App Now!
        <div className='image101'>
          <img src={app} alt="App Store" className="image9" />
          <img src={play} alt="Play Store" className="image10" />
        </div>
      </div>
      <div className='terms'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Disclaimer</p>
      </div>
      <div className='imagecontainer1'>
        <img src={visa} alt="Visa" className="visa" />
        <img src={mastercard} alt="MasterCard" className="mastercard" />
        <img src={paypal} alt="PayPal" className="paypal" />
      </div>
      <div className='imagecontainer2'>
        <img src={maestro} alt="Maestro" className="maestro" />
        <img src={rupay} alt="Rupay" className="rupay" />
        <img src={axis} alt="Axis" className="axis" />
      </div>
      <p className='end'>© 2024, <u>Ohbyozy</u> <u>Powered by Shopify</u></p>
    </div>
    </div>
  );
};

export default Footer;
