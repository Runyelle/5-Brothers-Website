import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a>
            {/* add other platforms as needed */}
          </div>
        </div>
        <div className="footer-areas">
          <h4>Our Service Areas</h4>
          <ul>
            <li><a href="/services#residential">Residential Design</a></li>
            <li><a href="/services#industrial">Industrial Design</a></li>
            {/* Add more areas like machine design, commercial, etc. */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} 5 Brother's Drafting & Design For Permitting</p>
      </div>
    </footer>
  );
}