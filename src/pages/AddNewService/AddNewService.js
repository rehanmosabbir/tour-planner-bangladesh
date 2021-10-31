import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("form submitted");
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Add service successfully");
        reset();
      }
    });
  };
  return (
    <div className="container ">
      <div className="row d-flex flex-column align-items-center justify-content-center">
        <div className="col-md-6">
          <h1 className="text-danger fw-bold text-center mt-5 mb-4">
            Add a new service
          </h1>
          <hr className="w-50 m-auto mb-5" />
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Service Name"
                type="text"
                {...register("serviceName", { required: true })}
              />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Service Description"
                {...register("description", { required: true })}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="price in US dollar"
                type="number"
                {...register("price", { required: true })}
              />
            </div>

            <div className="col-md-8">
              <input
                className="form-control"
                placeholder="image URL"
                type="text"
                {...register("img", { required: true })}
              />
            </div>

            <input
              type="submit"
              className="btn btn-danger"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
