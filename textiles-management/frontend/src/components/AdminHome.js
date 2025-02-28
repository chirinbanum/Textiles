import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Admin.css";

const AdminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication & role
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      alert("Unauthorized Access! Redirecting to login.");
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/"); // Redirect to login after logout
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>Welcome to Admin Dashboard</h2>
        <p>Manage products, users, orders, and more.</p>
        
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
