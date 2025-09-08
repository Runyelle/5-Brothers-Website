import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Testimonials.css'
import { Element } from 'react-scroll';

export default function Testimonials() {
    return (
    <Element name="testimonials" className="section">
        <h2>Testimonials</h2>
        <p>Some testimonials about company</p>
    </Element>
    );
  }