import React from "react";
import UserSidebar from "./UserSidebar"; // Import sidebar component
import "../css/User.css";

const UserHome = () => {
  return (
    <div className="user-container">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="user-content">
        <div className="category-section">
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Fashion" />
            <p>Fashion</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Beauty" />
            <p>Beauty</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/100" alt="Home & Kitchen" />
            <p>Home & Kitchen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
