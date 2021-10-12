import React from "react";
import "./Avatar.css";

export default function Avatar() {
  let user = localStorage.getItem("user");
  let parsedUser = {};
  try {
    parsedUser = JSON.parse(user);
  } catch (error) {}
  return (
    <div className="avatar">
      <div className="details">
        <span className="name">{parsedUser.name}</span>
        <span>{parsedUser.role}</span>
      </div>
      <img src="https://celebritynews.pk/wp-content/uploads/2021/07/robert-downey-jr-shirtless-7.jpg" />
    </div>
  );
}
