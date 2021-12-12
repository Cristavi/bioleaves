import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Browse extends Component {
  state = {
    products: [],
  };

  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  getAllProducts = () => {
    axios
      .get("http://localhost:8000/api/product", { headers: this.headers })
      .then((response) => {
        console.log(response);

        this.setState({
          products: response.data,
        });

        console.log(this.state.products);
      });
  };

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    if (this.state.products.length === 0) {
      return (
        <div>
          <p className="text-center">There are currently no products</p>
        </div>
      );
    }

    return (
      <div className="container-fluid" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              {this.state.products.map((p) => {
                return (
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      marginLeft: 5,
                      marginRight: 5,
                      marginTop: 20,
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={"http://localhost:8000/images/" + p.product_picture}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.product_name}</h5>
                      <p>Price(In Euros): {p.product_price}</p>
                      <Link
                        to={"/product/" + p._id}
                        style={{ textDecoration: "none", left: "50%" }}
                      >
                        <Button color="primary" variant="contained">
                          View more
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
