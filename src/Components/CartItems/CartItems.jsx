import React, { useContext } from "react";
import { CatalogueContext } from "../../Context/Catalogue";
import "./CartItems.css";

const CartItems = () => {
  const {
    getCartDetails,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  } = useContext(CatalogueContext);

  const cartDetails = getCartDetails(); // Get cart details with quantities

  // Calculate total price
  const calculateTotal = () => {
    return cartDetails
      .reduce((total, item) => total + item.new_price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartDetails.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.new_price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => addToCart(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Items: {getTotalCartItems()}</h3>
            <h3>Total Price: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
