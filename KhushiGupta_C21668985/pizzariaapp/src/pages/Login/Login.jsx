import { useState } from "react";
import {
  saveUser,
  getRegisteredUsers,
} from "../../services/localStorage";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../redux/slices/authSlice";

import "./Login.css";

function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {

      alert("Please fill all fields.");
      return;

    }

    // Get all registered users
    const users = getRegisteredUsers();

    // Find matching email
    const registeredUser = users.find(
      (user) => user.email === email
    );

    if (!registeredUser) {

      alert("User not found.");
      return;

    }

    if (
      registeredUser.name.trim().toLowerCase() !==
      name.trim().toLowerCase()
    ) {

      alert("Name does not match.");
      return;

    }

    const user = {
      name: registeredUser.name,
      email: registeredUser.email,
    };

    dispatch(login(user));

    saveUser(user);

    alert("Login Successful 🎉");

    navigate("/");

  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue ordering delicious pizzas.</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;