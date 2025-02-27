import React from "react";
import { Link } from "react-router-dom";
import "../css/Admin.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin">Dashboard Overview</Link></li>
        <li><Link to="/manage-products">Manage Products</Link></li>
        <li><Link to="/orders">Order Management</Link></li>
        <li><Link to="/users">User Management</Link></li>
        <li><Link to="/inventory">Category & Inventory</Link></li>
        <li><Link to="/reports">View Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
