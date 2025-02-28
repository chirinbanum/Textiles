import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/ManageProducts.css";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct"; // Import EditProduct component

const ManageProducts = () => {
    const [activePage, setActivePage] = useState("add");
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setActivePage("edit");
    };

    return (
        <div className="dashboard">
            <nav className="navbar">
                <h2>Manage Products</h2>
                <button className="nav-btn" onClick={() => setActivePage("add")}>Add</button>
                <button className="nav-btn" onClick={() => setActivePage("edit")}>Edit</button>
                <button className="nav-btn" onClick={() => setActivePage("delete")}>Delete</button>
                <button className="nav-btn" onClick={() => setActivePage("view")}>View</button>
                <button className="nav-btn logout">Logout</button>
            </nav>

            <div className="content">
                {activePage === "add" && <AddProduct />}
                {activePage === "edit" && <EditProduct product={selectedProduct} />}
                {activePage === "view" && (
                    <div className="product-list">
                        <h3>Product List</h3>
                        {products.map((product) => (
                            <div key={product._id} className="product-item">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageProducts;
