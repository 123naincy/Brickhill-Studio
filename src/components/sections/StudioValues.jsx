import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import girl_image from "../../assets/girl-center-image.png";
const leftValues = [
  {
    title: "Creative Vision",
    text: "We help creators transform ideas into cinematic visual stories with professional production quality.",
  },
  {
    title: "Consistency",
    text: "From reels to podcasts, we ensure every shoot maintains brand identity and premium quality.",
  },
  {
    title: "Professional Workflow",
    text: "Efficient recording, editing, and delivery pipelines to save your time and effort.",
  },
];

const rightValues = [
  {
    title: "Innovation",
    text: "Modern lighting, camera setups, and live-stream technology for next-level content creation.",
  },
  {
    title: "Collaboration",
    text: "Work closely with our creative team to shape your content exactly the way you imagine.",
  },
  {
    title: "Growth Focused",
    text: "We design studio experiences that help influencers, brands, and businesses grow faster.",
  },
];

export default function StudioValues() {
  return (
    <section className="studio-values">
      <Container>
        {/* TITLE */}
        <motion.div
  className="section-heading-wrap text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="section-title">
    Why Choose Our Studio
  </h2>

  <p className="section-subtitle">
    A professionally designed production environment built for creators, brands, and businesses seeking cinematic visuals, crystal-clear sound, and impactful storytelling.

  </p>
</motion.div>


        <Row className="align-items-center mt-5 gy-5">
          
          {/* LEFT SIDE */}
          <Col lg={4}>
            {leftValues.map((item, i) => (
              <motion.div
                key={i}
                className="value-box left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <CheckCircle className="value-icon" />

                <div className="value-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Col>

          {/* CENTER IMAGE */}
          <Col lg={4} className="text-center">
            <motion.img
              src={girl_image}
              alt="Studio"
              className="studio-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4}>
            {rightValues.map((item, i) => (
              <motion.div
                key={i}
                className="value-box right"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <CheckCircle className="value-icon" />

                <div className="value-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
}
