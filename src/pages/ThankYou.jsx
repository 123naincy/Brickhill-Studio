import { Container } from "react-bootstrap";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0b",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>

        <CheckCircle size={70} color="#22c55e" />

        <h1 className="mt-4">Thank You!</h1>

        <p className="mt-3">
          Your message has been sent successfully.  
          Our team will contact you soon.
        </p>

        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>

      </Container>
    </section>
  );
}

export default ThankYou;