import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'
import { Element } from 'react-scroll';

export default function Services() {
    return (
    <Element name="services" className="section">
        <h2>Services</h2>
        <p>Services about company</p>
    </Element>
    );
  }