import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/intro.css';
import Header from '../components/header';
import Footer from '../components/footer';
export default function intro() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <div className="intro-container">
        {/*navigation*/}
        <nav>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>

        </nav>
    </div>
    <Footer/>
    </>
  );
}