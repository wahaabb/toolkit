import React from "react";
import ToolCard from "../../Components/Toolcards/toolCards"; 
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Assets/Calculator.PNG";
import img2 from "../../Assets/countdown.PNG";
import img3 from "../../Assets/notes.PNG";
import img4 from "../../Assets/flashlight.PNG";

const Home = () => {
  const tools = [
    {
      title: "Calculator",
      description: "A scientific and efficient calculator.",
      image: img1,
      destination: "/calculator",
    },
    {
      title: "Countdown Timer",
      description: "Keep track of your time with this timer.",
      image: img2,
      destination: "/countdown",
    },
    {
      title: "Notes",
      description: "Take and organize your notes easily.",
      image: img3,
      destination: "/notes",
    },
    {
      title: "Compass",
      description: "Turn your device into a Compass.",
      image: img4,
      destination: "/compass",
    },
  ];

  return (
    <Container className="mb-5">
      <h1 className="text-center mt-4">Tools available</h1>
      <Row className="justify-content-center">
        {tools.map((tool, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="mb-4">
            <ToolCard 
              title={tool.title} 
              description={tool.description} 
              image={tool.image} 
              destination={tool.destination}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
