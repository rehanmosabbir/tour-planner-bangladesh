import axios from "axios";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import useAuth from "../../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [service, setService] = useState({});
  const { orderId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("form submitted");
    axios
      .post("http://localhost:5000/orders", { ...data, status: "pending" })
      .then((res) => {
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
        <div className="col-md-12">
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
                  <h6 className="card-title border-bottom pb-3">
                    {service?.serviceName}
                    <span className="text-danger mx-5">$ {service?.price}</span>
                  </h6>
                  <small className="card-text">{service?.description}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="text-danger fw-bold text-center mt-5 mb-4">
            Place an order
          </h1>
          <hr className="w-50 m-auto mb-5" />
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="name"
                type="text"
                value={user?.displayName}
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="email"
                type="email"
                value={user?.email}
                {...register("email", { required: true })}
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                placeholder="phone no."
                type="tel"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="address"
                type="text"
                {...register("address", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="service name"
                type="text"
                value={service?.serviceName}
                {...register("serviceName", { required: true })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="price in US dollar"
                type="number"
                value={service?.price}
                {...register("price", { required: true })}
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                placeholder="image url"
                type="text"
                value={service?.img}
                {...register("imgURL", { required: true })}
              />
            </div>

            <input
              type="submit"
              className="btn btn-danger"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
