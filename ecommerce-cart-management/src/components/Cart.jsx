import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Total: ₹{totalPrice}</h3>
            <button
              onClick={clearCart}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
