import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { CheckCircle, FileText, Building2, Home } from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Architectural Drafting",
      description:
        "Professional CAD drawings and blueprints for residential and commercial projects. We create detailed plans that meet all building codes and regulations.",
      features: [
        "2D & 3D CAD drawings",
        "Floor plans & elevations",
        "Construction details",
        "As-built drawings",
      ],
    },
    {
      icon: CheckCircle,
      title: "Permit Processing",
      description:
        "Complete permit application and processing services. We handle all the paperwork and coordinate with local authorities to ensure fast approval.",
      features: [
        "Building permits",
        "Zoning compliance",
        "Code analysis",
        "Permit expediting",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description:
        "Specialized services for commercial and industrial developments. From office buildings to warehouses, we have the expertise you need.",
      features: [
        "Commercial buildings",
        "Industrial facilities",
        "Retail spaces",
        "Multi-family housing",
      ],
    },
    {
      icon: Home,
      title: "Residential Services",
      description:
        "Complete residential drafting and permitting services. Whether it's a new home or renovation, we make the process seamless.",
      features: [
        "New construction",
        "Additions & remodels",
        "ADU/Granny flats",
        "Pool permits",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Our <span className="services-highlight">Services</span>
          </h2>
          <p className="services-description">
            Comprehensive drafting and permitting solutions for all your
            construction needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardHeader className="service-card-header">
                <service.icon className="service-icon" />
                <CardTitle className="service-title">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="service-card-content">
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <CheckCircle className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Full-width divider at bottom */}
      {/*<div className="mt-12">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 center">
          Contact Us Today
        </button>
      </div>*/}
    </section>
  );
};

export default Services;