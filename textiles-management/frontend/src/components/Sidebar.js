import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaClipboardList, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../css/Admin.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin"><FaTachometerAlt className="icon dashboard-icon" /> Dashboard Overview</Link></li>
        <li><Link to="/manage-products"><FaBoxOpen className="icon products-icon" /> Manage Products</Link></li>
        <li><Link to="/orders"><FaShoppingCart className="icon orders-icon" /> Order Management</Link></li>
        <li><Link to="/users"><FaUsers className="icon users-icon" /> User Management</Link></li>
        <li><Link to="/inventory"><FaClipboardList className="icon inventory-icon" /> Category & Inventory</Link></li>
        <li><Link to="/reports"><FaChartBar className="icon reports-icon" /> View Reports</Link></li>
        <li><Link to="/settings"><FaCog className="icon settings-icon" /> Settings</Link></li>
        <li><Link to="/"><FaSignOutAlt className="icon logout-icon" /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
