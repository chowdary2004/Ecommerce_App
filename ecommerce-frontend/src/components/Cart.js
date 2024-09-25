import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5000/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(data);
    };
    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/cart/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.product.name} - ${item.product.price}
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
