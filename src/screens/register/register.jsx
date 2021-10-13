import React, { Component } from "react";
import { Link } from "react-router-dom";
import { requests } from "../../api/requests";

function Register({ history }) {
  let OnRegisterPress = async () => {
    try {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let role = document.getElementById("role").value;
      let res = await requests.auth.register({ name, email, password, role });
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/shop");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
      console.log(error.response);
    }
  };

  return (
    <div className="app">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="right-inner">
          <h1>welcome</h1>
          <div className="inputs">
            <input id="name" type="text" placeholder="Name" />
            <input id="email" type="Email" placeholder="Email" />
            <input id="password" type="Password" placeholder="Password" />
            <br />
            <select name="cars" id="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button>Sign in</button>
          <button onClick={OnRegisterPress} className="button" to="/register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
