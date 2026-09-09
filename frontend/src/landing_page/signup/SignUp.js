import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        setUsername("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log("Signup error:", err);

      setError("Unable to connect to server");
    }
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div style={{ marginBottom: "15px" }}>
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Success message */}
          {message && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              {message}
            </p>
          )}

          {/* Error message */}
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}

          {/* Signup button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;