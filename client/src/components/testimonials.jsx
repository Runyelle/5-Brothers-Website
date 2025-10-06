import { Card, CardContent } from "../components/card";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Donna D.",
      role: "Addition to existing structure",
      text: "Great person to work with, friendly, quality work. Even called to see how things went. Highly recommended.",
      rating: 5,
      project: "Residential • 500 - 1,000 sq ft" ,
    },
    {
      name: "Gloria M.",
      role: "Construction documents (blueprints)",
      text: "Excellent service, quick turn around and good value. Rolly is experienced, knowledgable and shows a great sense of urgency. I will definitely use him again.",
      rating: 5,
      project: "Commercial Development | Commercial • 500 - 1,000 sq ft",
    },
    {
      name: "Nathaniel R.",
      role: "Design Drawings",
      text: "Rolly was outstanding to work with! VERY responsive. He called me back immediately several times throughout our project to update drawings or make changes. Great quality work and great value (fair pricing). I will definitely use him again.",
      rating: 5,
      project: "Addition to existing structure • Residential • 500 - 1,000 sq ft",
    },
    {
      name: "Sharon B.",
      role: "Complete remodel",
      text: "Rolly is the best ! Definitely heaven sent ! Super nice and got the work done fast ! Thank you Rolly for all you do !",
      rating: 5,
      project: "Commercial • 1,500 - 2,000 sq ft",
    },
    {
      name: "Nicole H.",
      role: "Addition to existing structure",
      text: "Mr. Rolly's work speaks for itself. He is the best and is very professional and timely. My husband and I also appreciated how he took out time to explain each step of the permitting phase to us and his willingness to get our job completed quickly.",
      rating: 5,
      project: "Commercial • More than 3,000 sq ft",
    },
    {
      name: "Eric C.",
      role: "Construction documents (blueprints)",
      text: "This company is excellent in all aspects. Friendly, prompt, capable and professional are the words that come to mind. Rolley is such a genuine and respected person. I’ll be referring him to my clients at any chance.",
      rating: 5,
      project: "Residential • Less than 500 sq ft",
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