import { Container, Button } from "react-bootstrap";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="cta-section">
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Book your studio session today.
        </motion.h2>

        <p>Create content that looks and sounds professional.</p>

        <Button className="btn-primary-glow mt-3">
          Reserve Your Slot
        </Button>
      </Container>
    </section>
  );
}
