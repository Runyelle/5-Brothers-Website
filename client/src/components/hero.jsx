import React from "react";
import { Button } from "../components/button"; // adjust path if needed
import heroImage from "../assets/logo.png";
import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          5 Brothers
          <span className="hero-title-highlight">Drafting & Permitting</span>
        </h1>
        <p className="hero-subtitle">
          Professional architectural drafting and permitting services you can
          trust. From concept to completion, we handle every detail.
        </p>
        <div className="hero-buttons">
          <Button
            size="lg"
            className="hero-button-primary"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
          <Button
            size="lg"
            className="hero-button-outline"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-container">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
