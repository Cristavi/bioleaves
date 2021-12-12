import { Component, ReactNode } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import { TextField } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";

export default class DeliveredProducts extends Component {
  state = {
    deliveredProducts: [],
  };

  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  getDeliveredProducts = () => {
    axios
      .get("http://localhost:8000/api/deliveredProduct", {
        headers: this.headers,
      })
      .then((response) => {
        this.setState({
          deliveredProducts: response.data,
        });

        console.log(this.state.deliveredProducts);
      });
  };

  clearDelivered = (id) => {
    axios.delete("http://localhost:8000/api/deliveredProduct/" + id, {
      headers: this.headers,
    }).then((response)=>{
        toast.info("Cleared", {
            position: toast.POSITION.TOP_RIGHT,
          });

          window.location.reload()
    });
  };

  componentDidMount() {
    this.getDeliveredProducts();
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <h3 className="text-center">My delivered products</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product name</th>
              <th scope="col">Date delivered</th>
              <th scope="col">Product price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sub total</th>
              <th scope="col">Clear</th>
            </tr>
          </thead>
          <tbody>
            {this.state.deliveredProducts.map((d) => {
              return (
                <tr>
                  <td>
                    <img
                      src={
                        "http://localhost:8000/images/" +
                        d.product.product_picture
                      }
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{d.product.product_name}</td>
                  <td>{d.created_at.split("T")[0]}</td>
                  <td>{d.product.product_price}</td>
                  <td>{d.quantity}</td>
                  <td>{d.product.product_price * d.quantity}</td>
                  <td>
                    <Button variant="contained" color="secondary" onClick={this.clearDelivered.bind(this, d._id)}>
                      Clear
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h5>You can clear the data without any issue</h5>
      </div>
    );
  }
}
