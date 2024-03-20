import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/modified-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            👋Hi, I am Sanjana. I am a Software Developer Specializing in
              Backend and DevOps Engineering.
              <br />
              <br />I am fluent in lamguages like
              <i>
                <b className="purple"> Javascript, Typescript, Java and Python. </b>
              </i>
              <br />
              <br />
              📝I write <b className="purple">technical blogs</b> to express my work.
              <br />
              <br />
              <i>
                I work on
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              I was part of  <b className="purple">Smart India Hackathon Finals.</b> 
              <br/>
              <br/>
              <i>
              My Hobbies include
                <b className="purple">
                  {" "}
                  playing guitar
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> reading books.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
