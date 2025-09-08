import React from 'react';
import {Link} from 'react-scroll';
import './Header.css';
import Logo from '../assets/Logo.png';

export default function Header() {

  return (
    <div>
        <header className="header">
            <Link to="about" smooth={true} duration={500}>
              <p><b>About Us</b></p>
            </Link>

            <Link to="services" smooth={true} duration={500}>
              <p><b>Services</b></p>
            </Link>

            <img src={Logo} alt="Logo" />

            <Link to="testimonials" smooth={true} duration={500}>
              <p><b>Testimonials</b></p>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <p><b>Contact Us</b></p>
            </Link>
        </header>
    </div>
  );
}