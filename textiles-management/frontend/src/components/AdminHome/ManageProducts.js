import React from 'react';
import { Link } from 'react-router-dom';  

import "../../css/ManageProducts.css";

const ManageProducts = () => {
  return (
    <div className="manage-products">
      <nav className="navbar">
        <ul className="navbar-items">
          <li>
            <Link to="/add-product" className="navbar-btn">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/edit-product" className="navbar-btn">
              Edit Product
            </Link>
          </li>
          <li>
            <Link to="/delete-product" className="navbar-btn">
              Delete Product
            </Link>
          </li>
          <li>
            <button className="navbar-btn logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Manage Products</h1>
        {/* Additional content for managing products */}
      </div>
    </div>
  );
};

export default ManageProducts;
