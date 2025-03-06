const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// 📌 Add Product (POST Request)
router.post("/", async (req, res) => {
  try {
    const { name, description, category, price, stock, image, status } = req.body;

    if (!name || !description || !category || !price || !stock || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      description,
      category,
      price,
      stock,
      image,
      status: status || "published", // Default to "published" if not provided
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!", product: newProduct });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 📌 Get All Products (GET Request)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 📌 Update Product Status (PUT Request)
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    if (!["published", "unpublished"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product status updated!", product });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
