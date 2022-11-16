import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftsqlserver,
  SiVisualstudiocode,
  SiVisualstudio,
  SiVercel,
  SiPhpstorm
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpstorm />
      </Col>
    </Row>
  );
}

export default Toolstack;
