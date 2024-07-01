import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.jpeg";
import spliwise from "../../Assets/Projects/splitwise.jpg";
import ecommerce from "../../Assets/Projects/book.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import vote from "../../Assets/Projects/vote.png";

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
              imgPath={chatbot}
              isBlog={false}
              title="ChatBot"
              description="Developed an innovative Chatbot application to provide intelligent and context aware assistance to users. It takes the input of both voice and text and answers according to the query. I had integrated google authentication to it.Designed and developed RESTful APIs for seamless communication between the frontend and backend services, ensuring efficient data handling and real-time responses. Deployed and managed the application on Google Cloud Platform (GCP), leveraging its services for scalability and reliability.
."
              ghLink="https://github.com/bhavyarangu333/chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Decentralized Voting Application"
              description="Developed a secure and transparent decentralized voting application leveraging blockchain technology. Utilized Hardhat for smart contract development and deployment, and Volta for Node.js version management. Designed and implemented the frontend using JavaScript, HTML, and CSS to provide an intuitive user interface for seamless interaction with the blockchain."
              ghLink="https://github.com/bhavyarangu333/Decentralized-voting-application-blockchain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spliwise}
              isBlog={false}
              title="Real-Time Data Processing of Split wise Data using Big Data Technologies "
              description="Handling and analyzing the information available in the application Splitwise in real-time so we can get the cost designs, person investing propensities, and suggestions for taking a toll optimization.Technologies: Apache Kafka, Apache Spark, Apache Scala, Apache Cassandra, Spring Boot, JetBrains Kotlin, Docker Desktop, Docker Compose, Gradle, SBT (Simple Build tool)
"
              ghLink="https://github.com/bhavyarangu333/Real-Time-Data-Processing-of-Split-wise-Data-using-Big-Data-Technologies-.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Menu"
              description=" Developed a restaurant web application that integrates with a third-party API for food delivery services. Utilized Axios for API requests and Firebase for authentication. Implemented features to create delivery tokens and schedule deliveries, enhancing the user experience with efficient and secure interactions."
              ghLink="https://github.com/angyb00/RestaurantMenu"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E commerce book store"
              description="Developed an e-commerce book store project based on ASP.NET Core and C# for robust backend development, with Entity Framework Core for database management.I had used Stripe for payments, Twilio for SMS notifications, and supports OAuth authentication via Facebook and Google. Docker is used for containerization, ensuring consistent environments and streamlined deployments.
"
              ghLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
