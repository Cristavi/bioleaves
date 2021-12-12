import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import { TextField } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";

export default class Orders extends Component {
  state = {
    orders: [],
  };

  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  moveToDelivered = (id, productID, userID, quantity) => {
    axios
      .post(
        "http://localhost:8000/api/order/deliveredProduct/" + id,
        {
          user_id: userID,
          product_id: productID,
          quantity: quantity,
        },
        { headers: this.headers }
      )
      .then((response) => {
        toast.info("The order has been moved to user's delivered list.", {
          position: toast.POSITION.TOP_RIGHT,
        });

        window.location.reload();
      });
  };

  getAllOrders = () => {
    axios
      .get("http://localhost:8000/api/orders/all", { headers: this.headers })
      .then((response) => {
        this.setState({
          orders: response.data,
        });

        console.log(this.state.orders)
      });
  };

  componentDidMount() {
    this.getAllOrders();
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <h3 className="text-center">
          Click on complete if the transaction has been completed
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product name</th>
              <th scope="col">Date ordered</th>
              <th scope="col">Product price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sub total</th>
              <th scope="col">Ordered by</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((o) => {
              return (
                <tr>
                  <td>
                    <img
                      src={
                        "http://localhost:8000/images/" +
                        o.product.product_picture
                      }
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{o.product.product_name}</td>
                  <td>{o.created_at.split("T")[0]}</td>
                  <td>{o.product.product_price}</td>
                  <td>{o.quantity}</td>
                  <td>{o.product.product_price * o.quantity}</td>
                  <td>
                    {o.user.f_name} {o.user.l_name}
                  </td>
                  <td>
                    <Button onClick={this.moveToDelivered.bind(this, o._id, o.product_id, o.user_id, o.quantity)} variant="contained" color="primary">
                      Complete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
