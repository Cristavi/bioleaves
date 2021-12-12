import { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import About from "../Body/About";
import AddProduct from "../Body/AddProduct";
import AdminLogin from "../Body/AdminLogin";
import Browse from "../Body/Browse";
import Contact from "../Body/Contact";
import DeliveredProducts from "../Body/DeliveredProducts";
import Gallery from "../Body/Gallery";
import Home from "../Body/Home";
import Login from "../Body/Login";
import Logout from "../Body/Logout";
import MyOrders from "../Body/MyOrders";
import Orders from "../Body/Orders";
import Product from "../Body/Product";
import Register from "../Body/Register";
import UpdateProduct from "../Body/UpdateProduct";
import ViewProducts from "../Body/ViewProducts";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/admin/login" exact component={AdminLogin} />
        <Route path='/product/add' exact component={AddProduct} />
        <Route path='/view-products' exact component={ViewProducts} />
        <Route path='/product/edit/:_id' exact component={UpdateProduct} />
        <Route path='/product/:_id' exact component={Product} />
        <Route path='/my-orders' exact component={MyOrders} />
        <Route path='/customer-orders' exact component={Orders}/>
        <Route path='/delivered-products' exact component={DeliveredProducts} />
      </div>
    );
  }
}
