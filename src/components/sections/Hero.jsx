import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "../../assets/podcast website.mp4";
import HeroBadgeMagic from "../sections/HeroBadgeMagic";

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">

      {/* 🎬 Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="hero-overlay"></div>

      {/* Glow effects */}
      <div className="hero-bg">
        <div className="glow glow-purple"></div>
        <div className="glow glow-cyan"></div>
        <div className="glow glow-pink"></div>
      </div>

      {/* Content */}
      <Container className="text-center position-relative z-1">
        <Row className="justify-content-center">
          <Col lg={10}>
            <HeroBadgeMagic />
            <h1 className="hero-title">
              <span className="hero-gradient">Premium Podcast</span>
              <br />
              <span className="hero-main">Studio Gurgaon
              </span>
            </h1>

            <p className="hero-subtitle">
              Cinematic 4K production with professional lighting, audio, and expert editing support.

            </p>

            <div className="hero-actions">
              <Button className="btn-premium">
                Get Started
                <ArrowRight size={20} className="arrow-loop ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
