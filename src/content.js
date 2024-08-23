import React from 'react';
import './content.css';
import image2 from './images/image2.png';
import shop from './images/shop.png';
import contentImage from './images/image2.png';
import arrow3 from './images/arrow3.png';
// function Content() {
//   return (
//     <div className="content">
//       <img
//         src={image2} // Corrected the reference to image2
//         alt="Content Image"
//         className="image4"
//       />
//       <button>
//         <img
//           src={shop} // Corrected the reference to shop
//           alt="Shop Now"
//           className="image5"
//         />
//       </button>
//     </div>
//   );
// }

function Content() {
  return (
    <div className="content">
      <img
        src={contentImage}
        alt="Content Image"
        className="image4"
      />
       <div className='button1'>
        <p className='text1000'>Shop Now</p>
        <img
        src={arrow3}
        alt="Content Image"
        className="arrow3"
      />
      </div>
    </div>
  );
}


export default Content;
