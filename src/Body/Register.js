import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default class Register extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  notify = () => {
    toast.success("Hello", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  state = {
    f_name: "",
    l_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  };

  headers = {
    "Content-Type": "application/json",
  };

  registerUser = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("f_name", "Jenish");
    data.append("l_name", this.state.l_name);
    data.append("email", this.state.email);
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("password_confirmation", this.state.password_confirmation);

    if (
      this.state.f_name === "" ||
      this.state.l_name === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.password_confirmation === ""
    ) {
      toast.error("Please fill out all the form", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    axios
      .post(
        "http://localhost:8000/api/user/register",
        data,
        { headers: this.headers }
      )
      .then((response) => {
        toast.success("Registration success", {
          position: toast.POSITION.TOP_RIGHT,
        });

        window.location.href = "/login";
      })
      .catch((err) =>{
        console.log(err)

        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <form>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <form className="form-horizontal" method="post" action="#">
                    <div className="form-group">
                      <label htmlFor="name" className="cols-sm-2 control-label">
                        First name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user fa" aria-hidden="true" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="f_name"
                            value={this.state.f_name}
                            id="name"
                            onChange={this.handleChange}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="cols-sm-2 control-label"
                        style={{ marginTop: 20 }}
                      >
                        Last name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user fa" aria-hidden="true" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="l_name"
                            value={this.state.l_name}
                            id="name"
                            onChange={this.handleChange}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="cols-sm-2 control-label"
                        style={{ marginTop: 20 }}
                      >
                        Your Email
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="fa fa-envelope fa"
                              aria-hidden="true"
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter your Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="username"
                        className="cols-sm-2 control-label"
                        style={{ marginTop: 20 }}
                      >
                        Username
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-users fa" aria-hidden="true" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Enter your Username"
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
                        Password
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
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Enter your Password"
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
                        Confirm Password
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
                            type="password"
                            className="form-control"
                            name="password_confirmation"
                            id="confirm"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            placeholder="Confirm your Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group " style={{ marginTop: 20 }}>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block login-button"
                        onClick={this.registerUser}
                      >
                        Register
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
    );
  }
}
