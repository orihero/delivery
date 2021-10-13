import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/user-slice";
import "./Avatar.css";

export default function Avatar() {
	let user = useSelector(selectUser);
//   let user = localStorage.getItem("user");
//   let parsedUser = {};
//   try {
//     parsedUser = JSON.parse(user);
//   } catch (error) {}
  return (
    <div className="avatar">
      <div className="details">
        <span className="name">{user.name}</span>
        <span>{user.role}</span>
      </div>
      <img src="https://celebritynews.pk/wp-content/uploads/2021/07/robert-downey-jr-shirtless-7.jpg" />
    </div>
  );
}
