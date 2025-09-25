import React from 'react';
import './Services.css';
import img1 from '../assets/react.svg';
import img2 from '../assets/react.svg';
import img3 from '../assets/react.svg';

export default function Services() {
  return (
    <section className="services-section">
      <div className="services">
        <h2>Our Services</h2>

        {/* Image Row */}
        <div className="services-images">
          <img src={img1} alt="Service 1" />
          <img src={img2} alt="Service 2" />
          <img src={img3} alt="Service 3" />
        </div>

        {/* Two-Column Text */}
        <div className="services-content">
          <div className="service-box">
            <h3>Construction Documents & Permitting</h3>
            <p>
              We provide affordable drafting services for creating construction
              documents (blueprints) for new house plans and additions to existing
              homes. Whether for single-family dwellings or multi-family dwellings,
              we deliver professional, customized house plans that meet your needs.
              With over 10 years of experience in architectural and structural
              drafting, we prepare detailed, accurate drawings that streamline the
              permitting process. Our services also include specialized
              architectural drafting for Fire Marshal permits.
            </p>
          </div>

          <div className="service-box">
            <h3>Additions & Remodeling</h3>
            <p>
              We have extensive experience with two-story and single-story additions,
              as well as remodeling projects. Our clients range from homeowners with
              a clear vision who need professional drawings, to full-service
              contractors and builders who rely on us for both design and permit
              processing. We take pride in the quality and detail of our work,
              ensuring that every project is carefully crafted to bring your ideas
              to life.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="services-divider"></div>
    </section>
  );
}