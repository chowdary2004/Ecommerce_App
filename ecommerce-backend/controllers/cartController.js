const Cart = require("../models/Cart");

// Get user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart" });
  }
};

// Add an item to the cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // Check if the product already exists in the cart
      const itemIndex = cart.items.findIndex(item => item.product == productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    } else {
      cart = new Cart({ user: req.user._id, items: [{ product: productId, quantity }] });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
  }
};

// Remove an item from the cart
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    cart.items = cart.items.filter(item => item._id != req.params.id);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error removing item from cart" });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
