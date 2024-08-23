import React from 'react';
import './testimonials.css';

const reviews = [
    { name: 'Sophia', rating: 5, text: 'This necklace is absolutely beautiful. The details are intricate and just as shown in the pictures. I couldn’t be happier with my purchase.' },
    { name: 'James', rating: 4, text: 'The quality of the jewelry is great. However, the delivery was slightly delayed, which was a bit disappointing. Overall, I’m satisfied with the product.' },
    { name: 'Aisha', rating: 5, text: 'I bought this as a gift, and it was a huge hit. The necklace is stunning and exceeded my expectations. I would definitely recommend it.' },
    { name: 'Liam', rating: 3, text: 'The product is nice, but it was smaller than I expected. The pictures made it look bigger. Still, it’s a decent piece of jewelry.' },
    { name: 'Olivia', rating: 5, text: 'I absolutely love the design of this necklace. The craftsmanship is top-notch and worth every penny. I’ve received so many compliments!' },
    { name: 'Ethan', rating: 4, text: 'The necklace is very elegant and perfect for formal occasions. It’s good value for the price. I wish the packaging was a bit better though.' },
    { name: 'Amelia', rating: 5, text: 'This necklace is perfect for special occasions. The design is unique and very eye-catching. I’m extremely happy with my purchase.' },
    { name: 'Lucas', rating: 4, text: 'I’m happy with the quality and design of this necklace. It’s simple yet elegant. I would definitely consider buying more jewelry from this brand.' },
    { name: 'Mia', rating: 5, text: 'This necklace exceeded my expectations. The quality is outstanding, and it looks even better in person. I highly recommend this product.' },
    { name: 'Noah', rating: 3, text: 'The necklace looks good, but it feels a bit light and delicate. I was expecting something a bit more substantial. It’s still a nice piece though.' },
    { name: 'Isabella', rating: 5, text: 'This necklace is fantastic! It looks exactly like the picture on the website. I’ve worn it several times and always get compliments.' },
    { name: 'Alexander', rating: 4, text: 'I’m satisfied with my purchase of this necklace. It’s a nice piece of jewelry for the price. The design is simple but classy.' },
    { name: 'Charlotte', rating: 5, text: 'This necklace is gorgeous! I’ve gotten so many compliments every time I wear it. The quality is excellent, and it feels very luxurious.' },
    { name: 'Henry', rating: 4, text: 'The design of this necklace is elegant and sophisticated. It’s perfect for both casual and formal wear. I’m very pleased with my purchase.' },
  ];

const CustomerTestimonials = () => {
  return (
    <div className="customer-testimonials-container">
      <h2 className="testimonials-heading">Customer Testimonials</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="reviewer-name">{review.name}</div>
            <div className="review-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <div className="review-text">{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
