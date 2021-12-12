import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  state = {
    email: "",
    password: ""
  }

  headers = {
    "Content-Type": "application/json",
  };


  login = (e) =>{
    e.preventDefault();

    const data = new FormData
    data.append('email', this.state.email)
    data.append('password', this.state.password)

    axios.post('http://localhost:8000/api/user/login', data, {headers:this.headers})
    .then((response)=>{

      localStorage.setItem('isUser', response.data.isUser)
      localStorage.setItem('token', response.data.token)

      window.location.href = '/'
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form className="form-horizontal" method="post" action="#">
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
                          <i className="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Enter your Email"
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
                          <i className="fa fa-lock fa-lg" aria-hidden="true" />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          onChange={this.handleChange}
                          value={this.state.password}
                          name="password"
                          id="password"
                          placeholder="Enter your Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group " style={{ marginTop: 20 }}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block login-button"
                      onClick={this.login}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <Link to='/admin/login' style={{ marginTop: '20px' }}>Click here to login as admin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
