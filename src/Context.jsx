import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      return prevItems.find((item) => item === newItem)
        ? [...prevItems]
        : [...prevItems, newItem];
    });
  }
  function removeFromCart(newItem) {
    setCartItems(cartItems.filter((item) => item !== newItem));
  }
  function clearCart() {
    setCartItems([]);
  }
  function selectItem(item) {
    setIsItemAdded([...isItemAdded, item]);
  }

  return (
    <Context.Provider
      value={{
        photos,
        addToCart,
        removeFromCart,
        cartItems,
        isItemAdded,
        selectItem,
        clearCart
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
