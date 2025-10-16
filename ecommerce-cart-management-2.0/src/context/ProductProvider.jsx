import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
    const [carts, setCarts] = useState([])

    const addToCart = (product) => {
        setCarts((item) => {
            const exisItem = item.find((x) => x.id === product.id)
            if (exisItem) {
                return item.map((x) => {
                    return (
                        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                    )
                })
            }
            return [...item, { ...product, qty: 1 }]
        })
    }

    const deleteCart = (id) => {
        setCarts(carts.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCarts([])
    }

    const totalAmount = carts.reduce((acc, item) => acc + item.price * item.qty, 0)


    return (
        <>
            <ProductContext.Provider value={{ totalAmount, clearCart, deleteCart, addToCart, carts }}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductProvider