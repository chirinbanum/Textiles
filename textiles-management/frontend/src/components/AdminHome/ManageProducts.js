import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    // Fetch products from API
    useEffect(() => {
        axios.get("/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    // Delete Product
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter(product => product._id !== id));  // Remove from state
            alert("Product deleted successfully!");
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // Edit Product
    const handleEdit = (product) => {
        setCurrentProduct(product);
        setShowEditForm(true);
    };

    return (
        <div className="manage-products">
            <h2>Manage Products</h2>
            <button className="add-btn" onClick={() => setShowAddForm(true)}>Add Product</button>

            {/* Show Add Product Form */}
            {showAddForm && <AddProduct setShowAddForm={setShowAddForm} setProducts={setProducts} />}

            {/* Show Edit Product Form */}
            {showEditForm && <EditProduct product={currentProduct} setShowEditForm={setShowEditForm} setProducts={setProducts} />}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td><img src={product.imageUrl} alt={product.name} width="50" /></td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
