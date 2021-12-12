import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Contact us</div>
              <div className="card-body">
                <form className="form-horizontal" method="post" action="#">
                  <div className="form-group">
                    <label htmlFor="name" className="cols-sm-2 control-label">
                      Your Name
                    </label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-user fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Enter your Name"
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
                      Your email
                    </label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-user fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Enter your email"
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
                      Subject matter
                    </label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-lock fa-lg" aria-hidden="true" />
                        </span>
                        <textarea
                          className="form-control"
                          style={{ height: 200 }}
                          name="confirm"
                          id="confirm"
                          placeholder="Enter your subject matter"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group " style={{ marginTop: 20 }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block login-button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
