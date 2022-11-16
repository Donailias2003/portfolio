import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftsqlserver,
  SiVisualstudiocode,
  SiVisualstudio,
  SiVercel,
} from "react-icons/si";
import {AiFillGithub} from "react-icons/Ai

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
        <AiFillGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
