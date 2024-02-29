import React, { useState } from 'react';
import './add.css'; // Make sure to import your CSS file

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
    setTimeout(() => {
      setCartItems(0);
    }, 1000);
  };

  return (
    <div className="page-wrapper">
      <button id="addtocart" onClick={addToCart}>
        Add to Cart
        {cartItems > 0 && <span className="cart-item">{cartItems}</span>}
      </button>
      <div className="new-version"><a href="">Check out</a></div>
      <div id="cart" className={`cart ${cartItems > 0 ? 'shake' : ''}`} data-totalitems={cartItems}>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default ShoppingCart;
