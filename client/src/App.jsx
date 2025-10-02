import React from 'react';

import './App.css'
//import pages to be used here
import Header from './components/header.jsx';
import { Element } from "react-scroll"; //
//import Intro from './components/intro';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Testimonials from './components/testimonials.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import './App.css';

export default function App() {
  return (
    <div>

      {/*<Intro />*/}
      <Hero/>
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
