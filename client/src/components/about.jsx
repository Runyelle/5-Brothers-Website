import React from 'react';
import './About.css';
import { Element } from 'react-scroll';
import Logo from '../assets/Logo.png';

export default function About() {
  return (
    <Element name="about" className="section">
      <div className="section-content">
        <div className="textbox">
          <h2>About 5 Brother's Drafting & Design</h2>
          <div className = "about-text">
            
          <p>At 5 Brothers Drafting & Design, we provide affordable, high-quality construction documents (blueprints) for new home plans, remodels, and additions. Whether it’s a single-family home, multi-family dwelling, or a custom design, we work closely with our clients to bring their ideas to life without compromising on quality.</p>
          </div>

          <div className = "about-text">
          <p> With over 10 years of architectural and structural drafting experience, we take pride in delivering detailed, professional plans tailored to each project’s needs. Our clients range from homeowners with a clear vision to contractors and builders in need of full-service design and permit support.</p>
          </div>

          <div className = "about-text">
          <p>We’re dedicated to making the design process smooth and accessible—helping turn your house plans into reality with precision and care.</p>
          </div>

        </div>

        <div className="image">
          <img src={Logo} alt="Owner" />
        </div>
      </div>
    </Element>
  );
}