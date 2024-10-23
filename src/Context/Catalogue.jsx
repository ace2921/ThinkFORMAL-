import React, { createContext, useState } from "react";
import allProduct from "../Components/Assets/all_products";

export const CatalogueContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allProduct.length+1; i++) {
        cart[1] = 0;
    }
    return cart;
}



const CatalogueContextProvider = (props) =>{


    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const contextValue = {allProduct,cartItems,addToCart,removeFromCart}
    return (
        <CatalogueContext.Provider value={contextValue}>
            {props.children}
        </CatalogueContext.Provider>
    )
}

export default CatalogueContextProvider;