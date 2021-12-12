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

export default class MyOrders extends Component {
  state = {
    orders: [],
    quantity: 0,
  };

  headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  };

  getOrders = () => {
    axios
      .get("http://localhost:8000/api/order", { headers: this.headers })
      .then((response) => {
        console.log(response.data);

        this.setState({
          orders: response.data,
        });
      });
  };

  deleteOrder = (id) => {
    axios
      .delete("http://localhost:8000/api/order/" + id, {
        headers: this.headers,
      })
      .then(() => {
        toast.info("Your order has been cancelled", {
          position: toast.POSITION.TOP_RIGHT,
        });

        window.location.reload();
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateOrder = (id) => {
      axios.put('http://localhost:8000/api/order/'+id, {quantity: this.state.quantity}, {headers:this.headers})
      .then(()=>{
          window.location.reload()
      })
  }

  componentDidMount() {
    this.getOrders();
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <h1 className="text-center">My orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product name</th>
              <th scope="col">Date ordered</th>
              <th scope="col">Product price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sub total</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
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
                  <td>
                    {" "}
                    <TextField
                      name="quantity"
                      type="number"
                      defaultValue={o.quantity}
                      value={this.quantity}
                      onChange={this.handleChange}
                      InputProps={{ InputProps: { min: 0, max: 50 } }}
                    ></TextField>
                  </td>
                  <td>{o.product.product_price * o.quantity}</td>
                  <td>
                      <Button variant="contained" onClick={this.updateOrder.bind(this, o._id)} color="primary">
                        Update quantity
                      </Button>
                    
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.deleteOrder.bind(this, o._id)}
                    >
                      Delete
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
