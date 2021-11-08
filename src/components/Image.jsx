import React, { useContext, useState } from "react";
import { Context } from "../Context";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);
  const [isItemAdded, setisItemAdded] = useState(false);

  const { addToCart, removeFromCart, cartItems } = useContext(Context);

  //handle favorite items
  function handleFavorite() {
    setisFavorite(true);
  }
  function handleDeFavorite() {
    setisFavorite(false);
  }

  //handle selected items
  const handleAddItem = () => {
    addToCart(img.url);
    setisItemAdded(true);
  };
  const handleRemoveItem = () => {
    removeFromCart(img.url);
    setisItemAdded(false);
  };

  return (
    <div
      className={`${className} img-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt={img.id} />
      {hovered && (
        <div>
          <i
            onClick={isFavorite ? handleDeFavorite : handleFavorite}
            className={
              isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
            }
          ></i>
          <i
            onClick={isItemAdded ? handleRemoveItem : handleAddItem}
            className={
              isItemAdded
                ? "ri-checkbox-circle-fill cart"
                : "ri-add-circle-line cart"
            }
          ></i>
        </div>
      )}
      {!hovered && (
        <div>
          <i className={isFavorite ? "ri-heart-fill favorite" : ""}></i>
          <i className={isItemAdded ? "ri-checkbox-circle-fill cart" : ""}></i>
        </div>
      )}
      {cartItems.map((url) => {
        if (url === img.url) {
          return (
            <i
              key={url}
              onClick={handleRemoveItem}
              className="ri-checkbox-circle-fill cart"
            ></i>
          );
        }
        return "";
      })}
    </div>
  );
}
