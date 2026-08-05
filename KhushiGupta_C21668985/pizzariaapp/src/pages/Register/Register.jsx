import "./Register.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  saveRegisteredUser,
  getRegisteredUsers,
} from "../../services/localStorage";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    // Empty Validation
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {

      alert("Please fill all fields.");
      return;

    }

    // Password Length
    if (password.length < 6) {

      alert("Password must be at least 6 characters.");
      return;

    }

    // Password Match
    if (password !== confirmPassword) {

      alert("Passwords do not match.");
      return;

    }

    // Duplicate Email Check
    const users = getRegisteredUsers();

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {

      alert("Email already registered.");
      return;

    }

    // Save User
    const newUser = {
      name,
      email,
      password,
    };

    saveRegisteredUser(newUser);

    alert("Registration Successful 🎉");

    navigate("/login");

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h1>Create Account 🍕</h1>

        <p>
          Join Pizzeria and order your favourite pizza.
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-link">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;
