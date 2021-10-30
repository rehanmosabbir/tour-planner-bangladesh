import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { orderId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${orderId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={service?.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title border-bottom pb-3">
                {service?.serviceName}
              </h5>
              <p className="card-text">{service?.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/home`}>
        <Button variant="danger">Go Back</Button>
      </Link>
    </div>
  );
};

export default PlaceOrder;
