import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default class UpdateProduct extends Component{
    state = {
        product_name: "",
        product_description: "",
        product_price: 0,
        product_picture: '',
        _id: this.props.match.params._id
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      uploadChange = (e) => {
        this.setState({
          [e.target.name]: e.target.files[0]
        })
      }

      getProduct = () => {
          axios.get('http://localhost:8000/api/product/edit/'+this.state._id, {headers: this.headers})
          .then((response)=>{
              this.setState({
                  product_name: response.data.product_name,
                  product_description: response.data.product_description,
                  product_price: response.data.product_price
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

      UpdateProduct = (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append('product_name', this.state.product_name)
        data.append('product_description', this.state.product_description)
        data.append('product_price', this.state.product_price)
        data.append('product_picture', this.state.product_picture)

        axios.post('http://localhost:8000/api/product/update/'+this.state._id, data, {headers: this.headers})
        .then((response)=>{
            

            toast.success("Product has been updated", {
                position: toast.POSITION.TOP_RIGHT,
              });

              window.location.href='/view-products'
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    


    render(){
        return(
            <div
            className="container-fluid"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <form>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Edit product</div>
                    <div className="card-body">
                      <form className="form-horizontal" method="post" action="#">
                        <div className="form-group">
                          <label
                            htmlFor="username"
                            className="cols-sm-2 control-label"
                            style={{ marginTop: 20 }}
                          >
                            Product name
                          </label>
                          <div className="cols-sm-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="fa fa-users fa" aria-hidden="true" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                name="product_name"
                                id="username"
                                value={this.state.product_name}
                                onChange={this.handleChange}
                                placeholder="Enter leaf plate name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="password"
                            className="cols-sm-2 control-label"
                            style={{ marginTop: 20 }}
                          >
                            Product description
                          </label>
                          <div className="cols-sm-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i
                                  className="fa fa-lock fa-lg"
                                  aria-hidden="true"
                                />
                              </span>
                              <textarea
                                className="form-control"
                                name="product_description"
                                value={this.state.product_description}
                                onChange={this.handleChange}
                                id="password"
                                placeholder="Enter product description"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="password"
                            className="cols-sm-2 control-label"
                            style={{ marginTop: 20 }}
                          >
                            Product price(In Euros)
                          </label>
                          <div className="cols-sm-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i
                                  className="fa fa-lock fa-lg"
                                  aria-hidden="true"
                                />
                              </span>
                              <input
                              type='number'
                                className="form-control"
                                name="product_price"
                                id="password"
                                value={this.state.product_price}
                                onChange={this.handleChange}
                                placeholder="Enter product price"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="confirm"
                            className="cols-sm-2 control-label"
                            style={{ marginTop: 20 }}
                          >
                            Product image
                          </label>
                          <div className="cols-sm-10">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i
                                  className="fa fa-lock fa-lg"
                                  aria-hidden="true"
                                />
                              </span>
                              <input
                                type="file"
                                className="form-control"
                                name="product_picture"
                               
                                onChange={this.uploadChange}
                                id="confirm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group " style={{ marginTop: 20 }}>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block login-button"
                            onClick={this.UpdateProduct}
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        )
    }
}