import React, { useContext, useState } from "react";
import { Context } from "../Context";

export default function Cart({ value }) {
  const { cartItems, removeFromCart, clearCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const [message, setMessage] = useState("You have no items left in cart!");

  function handleClick() {
    setButtonText("Ordering...");
    setTimeout(() => {
      clearCart();
      setMessage("Thank you for shopping 😊");
    }, 1000);
  }

  return (
    <div className="cart-container">
      <h1>Check Out</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item} className="item-card">
            <div className="img-delbtn">
              <i
                className="ri-delete-bin-fill"
                onClick={() => removeFromCart(item)}
              ></i>
              <img key={item} src={item} alt={item} />
            </div>
            <div className="order-amount">
              <h2>$5</h2>
            </div>
          </div>
        ))
      ) : (
        <p className="message">{message}</p>
      )}
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <span className="total-amount">Total: ${cartItems.length * 5}</span>
          <button
            className="order-btn"
            disabled={cartItems.length > 0 ? false : true}
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
