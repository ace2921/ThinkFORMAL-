import React, { createContext, useState } from 'react';

export const CatalogueContext = createContext();

const CatalogueProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  return (
    <CatalogueContext.Provider value={{ cart, addToCart }}>
      {children}
    </CatalogueContext.Provider>
  );
};

export default CatalogueProvider;
