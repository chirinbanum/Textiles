import React, { useState } from "react";
import axios from "axios";
import "../../css/AddProduct.css";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/products/add", product);
            alert(response.data.message);
            setProduct({ name: "", description: "", price: "", stock: "", imageUrl: "" });
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={product.description} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
                </div>

                <div className="button-group">
                    <button type="submit" className="btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
