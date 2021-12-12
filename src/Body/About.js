import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">About us</h1>
                <p className="lead text-muted mb-0">
                  We are Bio Leaves Plates, and we sell natural leave plates
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://png.pngitem.com/pimgs/s/124-1246858_creative-about-us-hd-png-download.png"
                  alt
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">What do we do</h2>
                <p className="font-italic text-muted mb-4">
                  We extract leaves from various trees that feasible for the
                  leaf plates for manufacturing and production to leaf plates.
                  The leaf plates would be 100 percent natural, as not even an
                  ounce of synthetic materials would be used on development
                  process.
                </p>
                <a
                  href="index.html"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Learn More
                </a>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://img.freepik.com/free-vector/people-working-factory-landing-pages_74855-2533.jpg?size=626&ext=jpg"
                  alt
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                  alt
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">Website</h2>
                <p className="font-italic text-muted mb-4">
                  Our website houses variety of leaf plates products that are
                  available for booking and purchases. The plates come in sets,
                  rather than individual pieces.
                </p>
                <a
                  href="browse.html"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Browse our products
                </a>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                textAlign: "left",
                marginLeft: "auto margin-right: auto",
              }}
            />
            <h1
              className="text-center"
              style={{ fontFamily: "emoji", marginTop: 20 }}
            >
              Our campaign
            </h1>
            <div
              className="container"
              id="section1"
              style={{ marginTop: 50, marginBottom: 50 }}
            >
              <div className="row">
                <div className="col-lg-4 cards">
                  <img
                    src="./planting.png"
                    width="100px"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h1 className="text-center">Plantation</h1>
                  <p className="text-center">
                    Facilitate plantation of Sal trees all over Germany for
                    higher production of bio leaves plates.
                  </p>
                </div>
                <div className="col-lg-4 cards">
                  <img
                    src="./community.png"
                    width="100px"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h1 className="text-center">Community</h1>
                  <p className="text-center">
                    A community based plantation operation to allow faster reach
                    of network.
                  </p>
                </div>
                <div className="col-lg-4 cards">
                  <img
                    src="./expansion.png"
                    width="100px"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h1 className="text-center">Expansion</h1>
                  <p className="text-center">
                    Plantation not only limited to Germany, but rest of Europe
                    as well.
                  </p>
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                textAlign: "left",
                marginLeft: "auto margin-right: auto",
              }}
            />
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">Contact us</h2>
                <p className="font-italic text-muted mb-4">
                  You can contact us via the website for personal or
                  professional purpose.
                </p>
                <a
                  href="contact.html"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Contact us
                </a>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://www.kindpng.com/picc/m/741-7414210_vector-contact-us-image-png-transparent-png.png"
                  alt
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
