import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://trade-nest-mswy.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
          window.location.href =
          "https://trade-nest-dashboard.onrender.com/?token=" +
          encodeURIComponent(data.token) +
          "&user=" +
          encodeURIComponent(JSON.stringify(data.user));
      }

       else {
        setError(data.message);
      }
    } catch (err) {
      console.log("Login error:", err);

      setError("Unable to connect to server");
    } finally {
      setLoading(false);
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
          Login
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

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}

          <Link to="/signup">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;