import { Card, CardContent } from "../components/card";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "5 Brothers made our home addition project so easy! They handled all the permits and their drafting was perfect. Highly recommended!",
      rating: 5,
      project: "Residential Addition",
    },
    {
      name: "Mike Chen",
      role: "General Contractor",
      text: "I've worked with 5 Brothers on multiple commercial projects. Their attention to detail and knowledge of local codes is exceptional.",
      rating: 5,
      project: "Commercial Development",
    },
    {
      name: "Lisa Rodriguez",
      role: "Property Developer",
      text: "Fast, professional, and reliable. They got our complex multi-family project approved in record time. Will definitely use them again.",
      rating: 5,
      project: "Multi-Family Housing",
    },
    {
      name: "David Thompson",
      role: "Architect",
      text: "5 Brothers is our go-to partner for permit processing. They understand the local requirements better than anyone else.",
      rating: 5,
      project: "Architectural Services",
    },
    {
      name: "Jennifer Wilson",
      role: "Business Owner",
      text: "Professional service from start to finish. They guided us through the entire process and kept us informed every step of the way.",
      rating: 5,
      project: "Commercial Renovation",
    },
    {
      name: "Robert Martinez",
      role: "Homeowner",
      text: "Excellent communication and expert knowledge. They turned what could have been a stressful process into a smooth experience.",
      rating: 5,
      project: "New Construction",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Our <span className="testimonials-highlight">Clients Say</span>
          </h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with 5 Brothers Drafting & Permitting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="testimonial-content">
                <Quote className="testimonial-quote" />
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="rating-star" />
                  ))}
                </div>
                
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-project">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer badge */}
        <div className="testimonials-footer">
          <div className="rating-badge">
            <Star className="badge-star" />
            <span className="badge-text">4.5 Stars</span>
            {/*<span className="badge-reviews">• 100+ Reviews</span>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;