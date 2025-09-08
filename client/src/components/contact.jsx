import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'
import { Element } from 'react-scroll';

export default function Contact() {
    return (
    <Element name="contact" className="section">
        <h2>Contact Us</h2>
        <p>Some info about the company...</p>
    </Element>
    );
  }