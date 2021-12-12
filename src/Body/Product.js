import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery'
import { TextField } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";

export default class Product extends Component {

  state = {
    product_name: "",
    product_description: "",
    product_price: 0,
    product_picture: '',
    _id: this.props.match.params._id,
    quantity: 0
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};

getProduct = () => {
  axios.get('http://localhost:8000/api/product/'+this.state._id, {headers: this.headers})
  .then((response)=>{
    console.log()

      this.setState({
          product_name: response.data.product_name,
          product_description: response.data.product_description,
          product_price: response.data.product_price,
          product_picture: response.data.product_picture
      })
  })
}

componentDidMount(){
  this.getProduct();

}


headers = {
  "Content-Type": "application/json",
  "Authorization" :  `Bearer ${localStorage.getItem('token')}`
};

addOrder = (e) => {
  e.preventDefault()

  axios.post('http://localhost:8000/api/product/order/'+this.state._id, {quantity:this.state.quantity}, {headers:this.headers})
  .then((response)=>{
    toast.success("Product has been added to your orders list", {
      position: toast.POSITION.TOP_RIGHT,
    });

    window.location.href='/my-orders'
  })
}

  render() {

    
    return (
      <div
        className="container-fluid"
        style={{ paddingLeft: 100, marginTop: 20, marginBottom: 20 }}
      >
        <div className="row">
          <div className="col-md-5">
            <img src={"http://localhost:8000/images/"+this.state.product_picture} style={{ width: "100%", height: 500 }} />
          </div>
          <div className="vr" />
          <div className="col-md-6">
            <h2 className="text-center">{this.state.product_name}</h2>
            <h4>Description</h4>
            <p>
              {this.state.product_description}
            </p>
            <h5>Price (Euros): {this.state.product_price}</h5>
            <h6>
              Your account will collect 10 points for successful purchase of
              this product
            </h6>
            <p>Enter set quantity for order</p>
            <TextField
            name="quantity"
            type="number"
            label="Set number of quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            InputProps={{ InputProps : { min : 0, max: 50 } }}>

            </TextField>
            <div style={{ marginTop: 10 }}>
              <button type="submit" onClick={this.addOrder} className="btn btn-primary px-3">
                <i className="fab fa-android" aria-hidden="true" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
