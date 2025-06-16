import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import capstone from "../../Assets/Projects/Capstone.png";
import pso from "../../Assets/Projects/pso.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pso}
              isBlog={false}
              title="Devops"
              description="This is my Final group project on my devops course. This app have the intention of applying the CI/CD pipeline into a github repo for seamless deployment. The project was hosted live using Amazon Web Service (AWS)."
              ghLink="https://github.com/rzamzam/samplepso"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstone}
              isBlog={false}
              title="SI Capstone"
              description="This is my another one of my project for the Information System major in ITS. This app is a profile system made for a law firm based in Jakarta. Integrating frameworks like next.js and tools like javascript."
              ghLink="https://github.com/Ifanr19/capstone"
              demoLink="https://capstone-tau-eight.vercel.app/"
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
