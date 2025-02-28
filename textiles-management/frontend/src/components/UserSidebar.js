import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBoxOpen, FaHeart, FaUser, FaCog, FaSignOutAlt, FaStore } from "react-icons/fa";
import "../css/User.css";

const UserSidebar = () => {
  return (
    <div className="sidebar">
      <h2>User Panel</h2>
      <ul>
        <li><Link to="/user"><FaHome className="icon home-icon" /> Home</Link></li>
        <li><Link to="/products"><FaStore className="icon store-icon" /> Browse Products</Link></li>
        <li><Link to="/cart"><FaShoppingCart className="icon cart-icon" /> My Cart</Link></li>
        <li><Link to="/orders"><FaBoxOpen className="icon order-icon" /> Order History</Link></li>
        <li><Link to="/wishlist"><FaHeart className="icon wishlist-icon" /> Wishlist</Link></li>
        <li><Link to="/profile"><FaUser className="icon profile-icon" /> My Profile</Link></li>
        <li><Link to="/settings"><FaCog className="icon settings-icon" /> Settings</Link></li>
        <li><Link to="/"><FaSignOutAlt className="icon logout-icon" /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default UserSidebar;
