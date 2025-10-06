import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🛒 E-commerce Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProductList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
