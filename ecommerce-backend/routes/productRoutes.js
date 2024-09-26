const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

// Public routes for fetching products
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin-only routes for managing products
router.post("/", protect, admin, createProduct);

module.exports = router;
