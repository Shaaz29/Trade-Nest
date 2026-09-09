import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3002/signup",
        formData
      );

      alert(response.data.message);

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Signup failed. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Create Account</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">
          Sign Up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;