import React from "react";
import { Palette, Code, Smartphone, TrendingUp, Video, Layers } from "lucide-react";


export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description:
        "Create a unique and memorable brand identity that resonates with your audience",
      color: "bg-primary",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build fast, responsive, and scalable web applications with modern technologies",
      color: "bg-info",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Develop native and cross-platform mobile applications for iOS and Android",
      color: "bg-success",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Grow your business with data-driven marketing strategies and campaigns",
      color: "bg-warning",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Professional video content that tells your story and engages your audience",
      color: "bg-danger",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description:
        "Design intuitive and beautiful user experiences that delight your customers",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted fs-5">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="service-card h-100 text-center p-4">
                  <div
                    className={`icon-box ${service.color} d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <Icon size={32} color="#fff" />
                  </div>

                  <h4 className="text-white fw-bold">{service.title}</h4>
                  <p className="text-muted">{service.description}</p>

                  <div className="learn-more">
                    Learn More →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
