import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("isUser")
    ) {
      var menu = (
        <nav>
          <div class="logo">
            <img src="./logo.png" width={200} />
          </div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" id="icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/browse"
              >
                Browse
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/my-orders"
              >
                My orders
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/delivered-products"
              >
                Delivered Products
              </Link>
            </li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/gallery"
            >
              Gallery
            </Link>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact"
              >
                Contact us
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/logout"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("isAdmin")
    ) {
      var menu = (
        <nav>
          <div class="logo">
            <img src="./logo.png" width={200} />
          </div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" id="icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#fff" }}
              to='/product/add'>
                Add new product
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/view-products"
              >
                View products
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/customer-orders"
              >
                Customer orders
              </Link>
            </li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/gallery"
            >
              Gallery
            </Link>

            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/logout"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      var menu = (
        <nav>
          <div class="logo">
            <img src="./logo.png" width={200} />
          </div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" id="icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/browse"
              >
                Browse
              </Link>
            </li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/gallery"
            >
              Gallery
            </Link>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/login"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <div>
        {menu}
        <div
          class="modal fade"
          id="productModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
