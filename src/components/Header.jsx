import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { Context } from "../Context";

export default function Header() {
  const { cartItems } = useContext(Context);
  return (
    <div>
      <nav>
        <Link to="/">SHOPIC</Link>
        <Link to="/cart">
          <div className="checkout">
            <small>checkout</small>
            {cartItems.length > 0 ? (
              <div>
                <i className="ri-shopping-cart-fill"></i>
                <small className="totalCartItems">{cartItems.length}</small>
              </div>
            ) : (
              <i className="ri-shopping-cart-line"></i>
            )}
          </div>
        </Link>
      </nav>
      <Outlet />
      <footer>
        <i className="ri-twitter-fill"></i>
        <p>&nbsp;akramnarejo</p>
      </footer>
    </div>
  );
}
