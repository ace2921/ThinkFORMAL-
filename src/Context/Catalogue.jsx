import React, { createContext, useState } from "react";
import allProduct from "../Components/Assets/all_products";

export const CatalogueContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  allProduct.forEach((product) => {
    cart[product.id] = 0; // Initialize all products with a quantity of 0
  });
  return cart;
};

const CatalogueContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add to cart functionality
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Remove from cart functionality
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  // Get total items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  // Get cart details
  const getCartDetails = () => {
    return allProduct
      .filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        ...product,
        quantity: cartItems[product.id],
      }));
  };

  const contextValue = {
    allProduct,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getCartDetails,
  };

  return (
    <CatalogueContext.Provider value={contextValue}>
      {props.children}
    </CatalogueContext.Provider>
  );
};




export default CatalogueContextProvider;
