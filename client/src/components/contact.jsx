import {Button} from "../components/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Phone, Mail, Clock } from "lucide-react"; // removed MapPin
import React, { useState } from "react";
import { useToast } from "../hooks/use-toast.js";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [status, setStatus] = useState(""); // show success/failure message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(832) 372-5970", "Monday - Sunday: 8AM - 5PM"],
      action: "tel:+18323875970"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["rmara1902@gmail.com", "We respond within 24 hours"],
      action: "mailto:rmara1902@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 8AM - 5PM", "Sun: Closed"],
      action: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
             <span className="contact-highlight"> Contact </span> Us
          </h2>
          <p className="contact-description">
            Ready to start your project? Contact us today,
            we're here to help make your construction dreams a reality.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <Card className="contact-form-card">
            <CardHeader>
              <CardTitle className="form-title">Send Us a <span className = "contact-highlight"> Message </span></CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <Input
                      placeholder="Project Type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <Textarea
                    placeholder="Tell us about your project..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-textarea"
                  />
                </div>
                <div className= "form-field">
                <Button 
                type="submit" 
                size="lg" 
                className="contact-submit-btn"
                >
                  Message Us
                </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-info-card">
                <CardContent className="contact-info-content">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <info.icon className="info-icon" />
                    </div>
                    <div className="info-details">
                      <h3 className="info-title">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="info-detail">
                          {info.action && idx === 0 ? (
                            <a 
                              href={info.action} 
                              className="info-link"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
//rgb(24, 27, 34)
export default Contact;