import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";


export default class Gallery extends Component{
    render(){
        return(
           <div className="container-fluid" style={{marginTop: 20}}>
  <div className="row">
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img src="./betal2.png" className="w-100 shadow-1-strong rounded mb-4" alt />
       {/* 
              <img
              src="betal.png"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
              /> */} 
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img src="./betal.png" className="w-100 shadow-1-strong rounded mb-4" alt />
       {/* 
              <img
              src="4.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
              /> */}
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      {/* 				<img
              src="3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
              /> */} 
      <img src="./betal3.png" className="w-100 shadow-1-strong rounded mb-4" alt />
    </div>
  </div>
  <h5>Source: http://tasteofnepal.blogspot.com/2012/03/leaf-plates-of-nepal-tapari-duna-bota.html</h5>
</div>

        )
    }
}