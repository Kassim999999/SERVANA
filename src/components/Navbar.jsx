import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Servana</Link>
      <div className="nav-links">
        <Link to="/services">Services</Link>
        {token && <Link to="/my-bookings">My Bookings</Link>}
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        {user?.name && user?.email && user?.email.includes("admin") && (
        <Link to="/admin">Admin</Link>
        )}

      </div>
    </nav>
  );
}
