import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          className="card card-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80)",
          }}
        >
          <div
            className="text-white text-center py-5 px-4"
            style={{ backgroundColor: "rgba(62,69,81,0.7)" }}
          >
            <div className="py-5">
              <h5 className="h5">Bio Leaves Plates</h5>
              <h2 className="card-title h2 my-4 py-2">
                Plates made by nature itself
              </h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5">
                Here, at Bio Leaves Plates, you can find yourself buying plates
                that healthy to the environment, so unlike plastic or paper
                plates, leaf plates belong to the mother nature.
              </p>
              <Link
                className="btn"
                to="/gallery"
                style={{
                  background: "linear-gradient(40deg, #ffd86f, #fc6262)",
                }}
              >
                View our gallery
              </Link>
            </div>
          </div>
        </div>
        <h1
          className="text-center"
          style={{ fontFamily: "emoji", marginTop: 20 }}
        >
          What are leaf plates?
        </h1>
        <div
          className="container"
          id="section1"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <div className="row">
            <div className="col-lg-5 cards">
              <img
                src="./betal.png"
                width="80%"
                height="300px;"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="col-lg-7 cards">
              <p
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "ui-monospace",
                  textAlign: "justify",
                }}
              >
                Leaf plates are made off of collections of leaves, which are
                further compressed, and sewn into plates using fibers. Like in
                usual plastic or paper plates, leaf plates are compressed into 3
                layers. But unlike, paper and plastic plates, leaf plates use
                absolutely no synthetic materials during production, and is 100
                percent nature.
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
        <h1
          className="text-center"
          style={{ fontFamily: "emoji", marginTop: 20 }}
        >
          Why go for leaf plates?
        </h1>
        <div
          className="container"
          id="section1"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <div className="row">
            <div className="col-lg-4 cards">
              <img
                src="eco.png"
                width="100px"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h1 className="text-center">Eco-friendly</h1>
              <p className="text-center">
                Leaf plates do not affect environment on external level.
              </p>
            </div>
            <div className="col-lg-4 cards">
              <img
                src="biodegradable.png"
                width="100px"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h1 className="text-center">Biodegradable</h1>
              <p className="text-center">
                What comes from nature, goes back to nature.
              </p>
            </div>
            <div className="col-lg-4 cards">
              <img
                src="leaves.png"
                width="100px"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h1 className="text-center">Variety</h1>
              <p className="text-center">
                Can be made via wide array of leaves in the nature.
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
        <h2
          className="text-center"
          style={{ fontFamily: "emoji", marginTop: 20, fontWeight: "bold" }}
        >
          Browse our fine plates
        </h2>
        <div
          className="container"
          id="section1"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <div className="row">
            <div className="col-lg-7 cards">
              <p
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "ui-monospace",
                  textAlign: "justify",
                }}
              >
                Using the website, you can go look for the variety of paper
                plates we are producing.
              </p>
              <button type="button" className="btn btn-success">
                <a
                  href="browse.html"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Browse our collection
                </a>
              </button>
            </div>
            <div className="col-lg-5 cards">
              <img
                src="./1.jpg"
                width="250px"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
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
        <h1
          className="text-center"
          style={{ fontFamily: "emoji", marginTop: 20 }}
        >
          How to make leaf plates?
        </h1>
        <div className="container" style={{ marginTop: 20 }}>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/PqIM_33yWrA"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
