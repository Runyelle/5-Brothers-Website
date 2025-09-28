import { Card, CardContent } from "../components/card";
import { Building, Users, Award, Clock } from "lucide-react";
import { Element } from "react-scroll";
import teamImage from "../assets/Logo.png"; // replace with real image later
import "./About.css";

export default function About() {
  const stats = [
    { icon: Building, number: "200+", label: "Projects Completed" },
    { icon: Users, number: "15+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Permit Success Rate" },
    { icon: Clock, number: "7 days a week", label: "Service Available" },
  ];

  return (
    <Element name="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <h2 className="about-title">
              About <span className="about-highlight">5 Brothers Drafting & Permitting</span>
            </h2>
            <p className="about-description">
              At 5 Brothers Drafting & Design, we provide affordable,
              high-quality construction documents (blueprints) for new home
              plans, remodels, and additions. Whether it’s a single-family home,
              multi-family dwelling, or a custom design, we work closely with
              our clients to bring their ideas to life without compromising on
              quality.
            </p>
            <p className="about-description">
              With over 10 years of architectural and structural drafting
              experience, we take pride in delivering detailed, professional
              plans tailored to each project’s needs. Our clients range from
              homeowners with a clear vision to contractors and builders in need
              of full-service design and permit support.
            </p>
            <p className="about-description">
              We’re dedicated to making the design process smooth and
              accessible—helping turn your house plans into reality with
              precision and care.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <Card key={index} className="stat-card">
                  <CardContent className="stat-card-content">
                    <stat.icon className="stat-icon" />
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="about-image-container">
            <img
              src={teamImage}
              alt="5 Brothers team"
              className="about-image"
            />
            <div className="about-image-overlay"></div>
          </div>
        </div>
      </div>
    </Element>
  );
}