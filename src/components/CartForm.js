import React, { useState, useContext } from "react";
import CartContext from "../store/cart-context";


const CartForm = (props) => {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(CartContext);
  

  const quantityChangeHandler = (event) => {
    setQuantity(+event.target.value); // Convert the input value to a number using +
  };

  const addItemToCart = (event) => {
    event.preventDefault();
    ctx.addItem({ ...props.item, quantity: quantity });
    
  };

  return (
    <div>
      <input type="number" value={quantity} onChange={quantityChangeHandler} id="amount" />
      <button onClick={addItemToCart}>+ Add</button>
    </div>
  );
};

export default CartForm;