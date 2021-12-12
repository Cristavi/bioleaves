import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer font-small"
        style={{ backgroundColor: "#1E9136", marginTop: 20, marginBottom: 10 }}
      >
        <div className="footer-copyright text-center py-3">
          <p className="text-white">© 2020 Copyright:</p>
          <p style={{ marginBottom: 10 }} className="text-white">
            {" "}
            Bio Leaves Plates{" "}
          </p>
        </div>
      </footer>
    );
  }
}
