import React from "react";
import { withRouter } from "react-router";
import MenuItem from "./MenuItem";
import "./Sidebar.css";

function SideBar({ history }) {
  let onLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-food-delivery-logo-vector-template-157000359.jpg" />
        <span>Food delivery</span>
      </div>
      <div className="content">
        <MenuItem icon="home" title="Dashboard" link="/dashboard" />
        <MenuItem icon="user" title="Users" link="/users" />
        <MenuItem icon="shopping-cart" title="Restaurants" link="/shop" />
        <MenuItem icon="grid" title="Orders" link="/orders" />
        <div className="footer">
          <MenuItem icon="log-out" title="Logout" onPress={onLogout} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(SideBar);
