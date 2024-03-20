import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/img_react.svg";
import chatify from "../../Assets/img_article_3.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/img-article_2.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="blogs">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few articles I've written.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fortifying Identity and Data: Secure Authentication and
              Authorization in Development"
              description="Secure authentication and authorization are critical components of
              any software or application development process. They play a vital
              role in safeguarding user identity and data, protecting against
              unauthorized access."
             
              demoLink="https://sanjanablogs.hashnode.dev/fortifying-identity-and-data-secure-authentication-and-authorization-in-development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="How to solve a programming question?"
              description="Solving a programming question has always been considered an
              impossible task to do. You don't need to be a wizard to solve a
              given problem. You just need know certain steps but you might not
              be solve the program on the first go."
              
              demoLink="https://sanjanablogs.hashnode.dev/how-to-solve-a-programming-question"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="7 Topics to Know in React To Get Started."
              description="React is a gamechanger for web developers. It's a special toolbox
              in JavaScript that helps create amazing things on websites.
              Imagine it as a set of building blocks—small, smart, and
              easy-to-use pieces—that can be combined to make anything from a
              simple button to a whole social media site."
              
              demoLink="https://sanjanablogs.hashnode.dev/7-topics-to-know-in-react-to-get-started"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
