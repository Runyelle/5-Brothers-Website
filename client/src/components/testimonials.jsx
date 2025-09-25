import React from 'react';
import { Element } from 'react-scroll';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://via.placeholder.com/300x160",
      title: "Pharetra fusce facilisis",
      text: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
    },
    {
      img: "https://via.placeholder.com/300x160",
      title: "Condimentum mus ipsum orci",
      text: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
    },
    {
      img: "https://via.placeholder.com/300x160",
      title: "Cubilia enim congue at cep amet",
      text: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
    }
  ];

  return (
    <Element name="testimonials" className="testimonials-section">
      <h2 className="testimonials-heading">Testimonials</h2>

      <div className="testimonials-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <img src={t.img} alt={t.title} className="testimonial-img" />
            <div className="testimonial-text">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-divider"></div>
    </Element>
  );
}e