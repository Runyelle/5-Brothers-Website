import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../assets/react.svg';
//<h3><Link to= '/login'>About</Link></h3>
export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
        <header className="header">
            <Link to="about" smooth={true} duration={500}>
              <p><b>About Us</b></p>
            </Link>

            <Link to="services" smooth={true} duration={500}>
              <p><b>Services</b></p>
            </Link>

            <img src={logo} alt="Logo" />

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