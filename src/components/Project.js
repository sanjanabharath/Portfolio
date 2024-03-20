import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Project(props) {
  return (
    <div id="projects">
    <Container className="home-content">
    <h1 className="project-heading" style={{textAlign: "center"}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
          <Row>
            <Col md={7} className="home-header">
            <Card className="project-card-view">
      <Card.Img variant="top" src="/project-1.png" alt="card-img" />
    </Card>
            </Col>

            <Col md={5} className="project-content" style={{ paddingBottom: 20,  marginTop: "50px", textAlign: "justify"}}>
            <h2><strong>Call Center Sentiment Analysis</strong></h2>
            <p  style={{ fontSize: "1.2em", paddingTop:"10px" }}>
            Our project combines Django backend and React frontend for sentiment analysis of customer call center interactions. By categorizing calls, managers can prioritize issues and improve satisfaction. Real-time analysis and detailed analytics enhance decision-making and performance tracking.
            </p>
            <Button
                href="https://github.com/sanjanabharath/Sentiment_analyzer_helpdesk"
                target="_blank"
                className="fork-btn-inner"
              >
                Github
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={7} className="home-header">
            <Card className="project-card-view">
      <Card.Img variant="top" src="/project-2.png" alt="card-img" />
    </Card>
            </Col>

            <Col md={5} className="project-content" style={{ paddingBottom: 20,  marginTop: "50px", textAlign: "justify"}}>
            <h2><strong>AI Trading Bot</strong></h2>
            <p style={{ fontSize: "1.2em", marginTop: "50px", textAlign: "justify"}}>
            An Automated AI trading bot that is useful in trading and helps in making money.The main library used in the project is lumibot. This provides a trading framework. The strategy from lumibot will be helpful in building trading bot. Alpaca will be our broker in this project.
            </p>
            <Button
                href="https://github.com/sanjanabharath/AI-Trading-Bot"
                target="_blank"
                className="fork-btn-inner"
              >
                Github
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={7} className="home-header">
            <Card className="project-card-view">
      <Card.Img variant="top" src="/project-3.png" alt="card-img" />
    </Card>
            </Col>

            <Col md={5} className="project-content" style={{ paddingBottom: 20,  marginTop: "50px", textAlign: "justify"}}>
            <h2><strong>Social Media for Mental Health</strong></h2>
            <p style={{ fontSize: "1.2em", marginTop: "50px", textAlign: "justify"}}>
            NexMind operates as an AI-driven monitoring tool that analyses textual content, conversations, and linguistic cues across various online platforms. The system's AI model is trained to recognize linguistic patterns,sentiment shifts, and semantic nuances indicative of melancholic thought processes.
            </p>
            <Button
                href="https://github.com/sanjanabharath/Mental-Health-Prediction-And-Help-Line-Using-Chatbot-In-SocialMedia"
                target="_blank"
                className="fork-btn-inner"
              >
                Github
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={7} className="home-header">
            <Card className="project-card-view">
      <Card.Img variant="top" src="/project-4.png" alt="card-img" />
    </Card>
            </Col>

            <Col md={5} className="project-content" style={{ paddingBottom: 20,  marginTop: "50px", textAlign: "justify"}}>
            <h2><strong>Visionary</strong></h2>
            <p style={{ fontSize: "1.2em", marginTop: "50px", textAlign: "justify"}}>
            Visionary seamlessly integrates real-time drawing with collaborative features and recording capabilities using the Next.js framework. With React for the frontend and Next.js for enhanced functionality, users can create, share, and edit drawings collaboratively.
            </p>
            <Button
                href="https://visionary-7jolqxia9-sanjanas-projects-d512e8ce.vercel.app/"
                target="_blank"
                className="fork-btn-inner"
              >
                Demo
              </Button>
            </Col>
          </Row>
        </Container>
    
    </div>
  );
}
export default Project;
