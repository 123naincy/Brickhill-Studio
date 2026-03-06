import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logo from "../../assets/logo.png";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5">
          {/* Company Info */}
          <Col md={4} className="mb-4 mb-md-0">

          <img src={logo} alt="BHL Studioz Logo" className="logo-img" />
        
            <p className="footer-text">
              Creating amazing digital experiences for businesses worldwide.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon me-3">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon me-3">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Github size={20} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-title">Contact</h5>
            <div className="footer-contact">
              <div className="contact-item mb-3">
                <Mail size={18} className="me-2" />
                <a href="mailto:info@bhlstudio.com">info@bhlstudio.com</a>
              </div>
              <div className="contact-item mb-3">
                <Phone size={18} className="me-2" />
                <a href="tel:+1234567890">+91-8383060833</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="me-2" />
                <span>Dlf Corporate greens,Tower 1, 1604-1605,Gurugram,Haryana</span>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-hr" />

        <Row className="py-4">
          <Col md={6} className="text-center text-md-start">
            <p className="footer-copyright">
              &copy; {currentYear} MyWebsite. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-text">
              <a href="#" className="footer-link me-3">
                Privacy Policy
              </a>
              |
              <a href="#" className="footer-link ms-3">
                Terms of Service
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
