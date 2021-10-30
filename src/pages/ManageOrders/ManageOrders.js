import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Container>
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">User Order</h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Service Name</th>
              <th>Product photo</th>
              <th> Name</th>
              <th> Email</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.serviceName}</td>
                <td>
                  <img className="img-fluid" src={order.imgURL} alt="" />
                </td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  <button className="btn btn-danger">Delele</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ManageOrders;
