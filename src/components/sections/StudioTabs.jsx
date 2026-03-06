import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import studioVideo1 from "../../assets/inside-bhl.mp4";
import studioVideo2 from "../../assets/bhl-setup.mp4";
import studioVideo3 from "../../assets/vision.mp4";

const tabs = [
  {
    id: "about",
    title: "Inside BHL Studioz",
    heading: "Creative Production Space",
    text: `Our studio is designed for creators, podcasters, photographers, 
    and brands who want cinematic-quality content. From lighting to sound, 
    everything is crafted to deliver a premium production experience.`,
    video: studioVideo1, // ✅ replace img with video
  },
  {
    id: "arms",
    title: "BHL SETUP",
    heading: "Professional Equipment & Lighting",
    text: `Multi-camera recording, broadcast-ready switching, cinematic lights, 
    and high-end microphones — all available under one roof for seamless 
    content creation and live production.`,
    video: studioVideo2,
  },
  {
    id: "aim",
    title: "OUR VISION",
    heading: "Empowering Modern Creators",
    text: `We aim to empower storytellers, brands, and influencers to produce 
    world-class content with ease — making professional production accessible 
    and cinematic for everyone.`,
    video: studioVideo3,
  },
];

export default function StudioTabs() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState({});
  const tab = tabs[active];

  return (
    <section className="studio-tabs-section">
      <Container>
        {/* Tabs */}
        <div className="studio-tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`studio-tab ${active === i ? "active" : ""}`}
              onClick={() => {
                setActive(i);
                setLoading({});
              }}
              type="button"
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Row className="align-items-center mt-5 g-4">
              {/* Text */}
              <Col lg={6} md={12}>
                <h2 className="studio-heading">{tab.heading}</h2>
                <p className="studio-text">{tab.text}</p>

                <Button className="btn-primary-glow mt-3">
                  Explore More →
                </Button>
              </Col>

              {/* ✅ Video (replacing Image) */}
              <Col lg={6} md={12}>
                <div className="studio-video-container">
                  {loading[tab.id] && (
                    <div className="video-loading">
                      <div className="spinner"></div>
                    </div>
                  )}
                  <motion.video
                    key={tab.id}
                    src={tab.video}
                    className="studio-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    onLoadStart={() =>
                      setLoading((prev) => ({ ...prev, [tab.id]: true }))
                    }
                    onCanPlay={() =>
                      setLoading((prev) => ({ ...prev, [tab.id]: false }))
                    }
                    onError={() =>
                      setLoading((prev) => ({ ...prev, [tab.id]: false }))
                    }
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}