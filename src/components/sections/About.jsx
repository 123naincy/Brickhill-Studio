import React from "react";
import { Award, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Lightbulb, label: "Projects Done", value: "1000+" },
    { icon: Target, label: "Success Rate", value: "98%" },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            About <span className="gradient-text">Our Studio</span>
          </h2>
          <p className="text-muted fs-5 mx-auto about-subtext">
            We are a team of passionate creators dedicated to bringing your ideas
            to life through innovative design and technology
          </p>
        </div>

        {/* Content Row */}
        <div className="row align-items-center mb-5 g-5">
          {/* Text */}
          <div className="col-md-6">
            <h3 className="text-white fw-bold mb-3">Crafting Digital Excellence</h3>
            <p className="text-muted">
              With over a decade of experience, we've helped hundreds of businesses
              transform their digital presence. Our team combines creativity with
              technical expertise to deliver solutions that not only look great but
              perform exceptionally.
            </p>
            <p className="text-muted">
              We believe in the power of collaboration and work closely with our
              clients to understand their unique challenges and goals. Every project
              is an opportunity to push boundaries and create something truly
              remarkable.
            </p>
          </div>

          {/* Image / Gradient Box */}
          <div className="col-md-6">
            <div className="about-visual">
              <div className="pulse-circle"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="col-6 col-md-3">
                <div className="stat-card p-4 h-100">
                  <Icon size={40} className="stat-icon mb-3" />
                  <h4 className="fw-bold gradient-text mb-1">{stat.value}</h4>
                  <p className="text-muted small mb-0">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
