import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import capstone from "../../Assets/Projects/Capstone.png";
import pso from "../../Assets/Projects/pso.png";
import rypple from "../../Assets/Projects/Rypple.png";
import quitnix from "../../Assets/Projects/QuitNix.png";
import rg from "../../Assets/Projects/RG.png";


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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rypple}
              isBlog={false}
              title="Rypple Prototype"
              description="A project of mine where i design a functioning prototype about a platform to deal with Indonesia's content creation problem to help new content creator build audience before jumping onto major platforms like youtube or twitch."
              demoLink="https://framer.com/share/Rypple--wdlNb9YHSMCDGxtN4dLv/d9LIYaeAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quitnix}
              isBlog={false}
              title="QuitNix"
              description="Final project when i was studying abroad in Queensland University Australia was to design an app that gives an alternative way to help people stop their nicotine addiction."
              demoLink="https://www.figma.com/design/8JZ4We3ugjWdRliqt8XqEu/Nicotine-Rehab?node-id=0-1&t=00XRRblkeXDn8X7S-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rg}
              isBlog={false}
              title="Randy's Garage"
              description="A design project for digital business course for a car dealership application."
              demoLink="https://www.figma.com/design/G6HRiEbgNhVpJmZfKfrAeN/Untitled?node-id=0-1&t=bWYUKHSz9mjXpqwB-1"
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
