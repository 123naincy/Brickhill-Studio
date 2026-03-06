import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Reveal from "../../animations/Reveal";

const plans = [
  {
    title: "Podcast Session",
    features: ["60 min recording", "2 cameras", "Studio microphones"],
  },
  {
    title: "Reel Shoot",
    price: "$350",
    features: ["4K cinematic lights", "Vertical framing", "Same-day delivery"],
    highlight: true,
  },
  {
    title: "Full Production",
    features: ["Multi-camera", "Live switching", "Broadcast ready output"],
  },
];

export default function Pricing() {
  return (
    <section className="dark-section">
      <Container>
        <Reveal>
          <h2 className="section-title">Simple Packages to Get You Started</h2>
        </Reveal>

        <Row className="mt-5">
          {plans.map((p, i) => (
            <Col lg={4} key={i} className="mb-4">
              <Reveal delay={i * 0.15}>
                <Card className={`pricing-card ${p.highlight ? "active" : ""}`}>
                  <Card.Body>
                    <h4>{p.title}</h4>
                    {p.price && <h3 className="price">{p.price}</h3>}

                    <ul>
                      {p.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>

                    <Button className="btn-primary-glow w-100">
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
