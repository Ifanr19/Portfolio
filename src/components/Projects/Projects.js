import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Devops"
              description="This is my Final group project on my devops course. This app have the intention of applying the CI/CD pipeline into a github repo for seamless deployment. The project was hosted live using Amazon Web Service (AWS)."
              ghLink="https://github.com/rzamzam/samplepso"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SI Capstone"
              description="This is my another one of my project for the Information System major in ITS. This app is a profile system made for a law firm based in Jakarta. Integrating frameworks like next.js and tools like javascript."
              ghLink="https://github.com/Ifanr19/capstone"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SI Capstone"
              description="This is my another one of my project for the Information System major in ITS. This app is a profile system made for a law firm based in Jakarta. Integrating frameworks like next.js and tools like javascript."
              ghLink="https://github.com/Ifanr19/capstone"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
