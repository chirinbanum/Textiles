const Product = require("../models/Product");

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, stock, imageUrl } = req.body;
        const newProduct = new Product({ name, description, price, stock, imageUrl });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Error adding product" });
    }
};

// Get a single product by ID
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error fetching product details" });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Error fetching products" });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: "Error updating product" });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting product" });
    }
};

module.exports = { addProduct, getProduct, updateProduct, deleteProduct, getAllProducts };
