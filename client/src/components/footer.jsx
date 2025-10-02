import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import "./footer.css"; // import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-header">
              <Building2 className="icon-large" />
              <span className="footer-title">
                5 Brothers Drafting & Permitting
              </span>
            </div>
            <p className="footer-description">
              Professional architectural drafting and permitting services for
              residential and commercial projects. Family-owned business with
              15+ years of experience.
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone className="icon-small" />
                <a href="tel:+8323725970">(832) 372-5970</a>
              </div>
              <div className="footer-contact-item">
                <Mail className="icon-small" />
                <a href="mailto:info@5brothersdrafting.com">
                  rmara1902@gmail.com
                </a>
              </div>
              {/*<div className="footer-contact-item">
                <MapPin className="icon-small" />
                <span>123 Construction Ave, Your City, State 12345</span>
              </div>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list muted">
              <li>Architectural Drafting</li>
              <li>Permit Processing</li>
              <li>Commercial Projects</li>
              <li>Residential Services</li>
              <li>Code Compliance</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} 5 Brothers Drafting & Permitting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;