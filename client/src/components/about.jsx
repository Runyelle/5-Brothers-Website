import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'
import { Element } from 'react-scroll';
import Logo from '../assets/Logo.png';

export default function About() {
  return (
    <Element name="about" className="section">
      <h2>About 5 Brother's Drafting & Design</h2>
      <div className = "textbox">
        <p>So this company is about...</p>
      </div>
      <div className = "image">
        <img src="Logo" alt= "Owner"/>
      </div>
    </Element>
  );
}