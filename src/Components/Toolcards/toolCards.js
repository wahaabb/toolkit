import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styles/toolCards.css";

const ToolCard = ({ title, description, image, destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(destination);
  };

  return (
    <div className="tool-card-container">
      <Card className="tool-card" onClick={handleClick}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToolCard;
