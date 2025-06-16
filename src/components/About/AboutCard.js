import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rizfandino Ramadhan </span>
            from <span className="purple"> Indonesia.</span>
            <br />
            I am currently a student majoring in Information System in ITS.
            <br />
            besides this, i love doing other stuff aswell
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Works 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Heading towards the unknown"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
