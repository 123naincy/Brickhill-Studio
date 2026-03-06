import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, TechStart Inc",
      content:
        "Working with this studio transformed our digital presence. Their creativity and attention to detail exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Founder, Creative Agency",
      content:
        "Exceptional work! The team delivered a stunning website that perfectly captures our brand identity. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      content:
        "Professional, responsive, and incredibly talented. They brought our vision to life and helped us achieve remarkable growth.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted fs-5">Don't just take our word for it</p>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card text-center mx-auto p-4 p-md-5">
          {/* Stars */}
          <div className="d-flex justify-content-center mb-3">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={24} className="star-icon" />
            ))}
          </div>

          {/* Content */}
          <p className="testimonial-text mb-4">"{current.content}"</p>

          {/* User */}
          <div className="d-flex align-items-center justify-content-center gap-3">
            <div className="avatar-circle"></div>
            <div className="text-start">
              <h5 className="text-white fw-bold mb-0">{current.name}</h5>
              <small className="text-muted">{current.role}</small>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="nav-btn" onClick={prevTestimonial}>
            <ChevronLeft size={22} />
          </button>
          <button className="nav-btn pink" onClick={nextTestimonial}>
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center gap-2 mt-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
