import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">
        Our Services
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <SingleService service={service} key={service._id}></SingleService>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
