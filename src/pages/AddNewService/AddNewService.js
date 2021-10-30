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
    <div>
      <h2>Add a new service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Service Name"
          {...register("serviceName", { required: true })}
        />
        <input
          type="text"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <input type="text" placeholder="image URL" {...register("img")} />
        <textarea
          placeholder="description of the service"
          {...register("description")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewService;
