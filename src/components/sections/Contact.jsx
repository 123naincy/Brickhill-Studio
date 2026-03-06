import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@studio.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted fs-5">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="row g-5">
          {/* Left Form */}
          <div className="col-lg-6">
            <h3 className="text-white fw-bold mb-4">Send us a message</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-light">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control custom-input"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control custom-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-light">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control custom-input"
                  required
                />
              </div>

              <button type="submit" className="btn send-btn w-100 d-flex align-items-center justify-content-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="col-lg-6">
            <h3 className="text-white fw-bold mb-4">Contact Information</h3>

            <div className="mb-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="contact-card d-flex align-items-start gap-3 mb-3 p-3">
                    <div className="icon-box d-flex align-items-center justify-content-center">
                      <Icon size={20} color="#fff" />
                    </div>
                    <div>
                      <h6 className="text-white fw-semibold mb-1">{info.label}</h6>
                      <p className="text-muted mb-0">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="office-box p-4">
              <h5 className="text-white fw-bold mb-3">Office Hours</h5>
              <p className="text-muted mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted mb-1">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted mb-0">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
