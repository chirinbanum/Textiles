import React, { useState } from "react";
import axios from "axios";
import "../../css/AddProduct.css"; // Ensure this file exists in the correct path

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    status: "published",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", product); // Removed unused `response` variable
      alert("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: "",
        status: "published",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />

        <label>Stock Quantity:</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} required />

        <label>Status:</label>
        <select name="status" value={product.status} onChange={handleChange}>
          <option value="published">Published</option>
          <option value="unpublished">Unpublished</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
