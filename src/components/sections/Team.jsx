import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";


export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      gradient: "blue",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      gradient: "cyan",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      gradient: "teal",
    },
    {
      name: "David Kim",
      role: "Marketing Head",
      gradient: "green",
    },
  ];

  return (
    <section id="team" className="team-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted fs-5">
            Talented individuals working together to create extraordinary results
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="team-card text-center">
                {/* Image / Gradient box */}
                <div className={`team-image ${member.gradient}`}>
                  <div className="overlay">
                    <div className="social-icons">
                      <a href="#"><Linkedin size={18} /></a>
                      <a href="#"><Twitter size={18} /></a>
                      <a href="#"><Github size={18} /></a>
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <h5 className="text-white fw-bold mt-3 mb-1">{member.name}</h5>
                <p className="text-muted small">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
