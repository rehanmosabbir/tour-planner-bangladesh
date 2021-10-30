import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [service, setService] = useState({});
  const { orderId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("form submitted");
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("order placed successfully");
        reset();
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/services/${orderId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
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
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="name"
              type="text"
              value={user?.displayName}
              {...register("name", { required: true })}
            />
            <input
              placeholder="email"
              type="email"
              value={user?.email}
              {...register("email", { required: true })}
            />
            <textarea
              placeholder="address"
              type="text"
              {...register("address", { required: true })}
            />
            <input
              placeholder="service name"
              type="text"
              value={service?.serviceName}
              {...register("serviceName", { required: true })}
            />

            <input
              placeholder="image url"
              type="text"
              value={service?.img}
              {...register("imgURL", { required: true })}
            />
            <input type="submit" />
          </form>
        </div>
      </div>

      <Link to={`/home`}>
        <Button variant="danger">Go Back</Button>
      </Link>
    </div>
  );
};

export default PlaceOrder;
