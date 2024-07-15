// src/Components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="Footer">
      <Container fluid className="py-3">
        <Row>
          <Col md="12" className="text-center text-md-left">
            <h5 className="mb-3">Pemetaan Bencana Alam</h5>
            <p>Informasi Pemetaan Bencana Alam.</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2">
        <p className="mb-0">&copy; 2024 PetaBena. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
