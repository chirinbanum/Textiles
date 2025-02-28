import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/EditProduct.css";

const EditProduct = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (product) {
            setUpdatedProduct(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/products/update/${updatedProduct._id}`, updatedProduct);
            alert("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    if (!product) return <p>Please select a product to edit.</p>;

    return (
        <div className="edit-product-container">
            <h2>Edit Product</h2>
            <form className="edit-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={updatedProduct.description} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" value={updatedProduct.stock} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="imageUrl" value={updatedProduct.imageUrl} onChange={handleChange} />
                </div>

                <div className="button-group">
                    <button type="submit" className="btn-primary">Update Product</button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
