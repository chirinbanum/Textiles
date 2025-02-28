const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Database connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5001; // Change from 5000 to 5001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});