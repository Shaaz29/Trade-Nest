import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import "./index.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const urlParams = new URLSearchParams(window.location.search);

const tokenFromUrl = urlParams.get("token");
const userFromUrl = urlParams.get("user");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
}

if (userFromUrl) {
  localStorage.setItem("user", userFromUrl);
}

if (tokenFromUrl || userFromUrl) {
  window.history.replaceState({}, document.title, "/");
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        {/* Protected Dashboard */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);