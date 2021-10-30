import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const SingleService = ({ service }) => {
  const { _id, serviceName, img, description } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="border-bottom pb-3">{serviceName}</Card.Title>
          <Card.Text className="border-bottom pb-3">
            {description.slice(0, 200)}...
          </Card.Text>
          <Link to={`/placeorder/${_id}`}>
            <Button variant="danger">
              Purchase{" "}
              <FontAwesomeIcon
                className="ms-2 text-white"
                icon={faLongArrowAltRight}
              />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
