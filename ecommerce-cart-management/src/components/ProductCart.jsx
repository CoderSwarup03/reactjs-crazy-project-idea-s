import React from "react";
import { useCart } from "../context/CartContext";
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
