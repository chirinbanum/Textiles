import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ setShowAddForm, setProducts }) => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        imageUrl: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/products", product);
            setProducts(prev => [...prev, response.data]); // Update UI
            setShowAddForm(false); // Close form
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div className="add-product-form">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange} required />
                <input type="text" name="imageUrl" placeholder="Image URL" value={product.imageUrl} onChange={handleChange} required />

                <button type="submit">Add Product</button>
                <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
            </form>
        </div>
    );
};

export default AddProduct;
