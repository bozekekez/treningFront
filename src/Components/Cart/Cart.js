import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../Context/Context";
import "./Cart.css";

const Cart = () => {
  const { cart, setBasket, basket, setCart } = useContext(ItemContext);

    let render = cart.map((member, i) => ({
      id: i,
      article: member.article,
      price: member.price,
      user: member.user,
    }));

  const handleDelete = (id, price) => {
    setCart(render.filter((member) => member.id !== id));
    let sum = parseFloat(basket) - parseFloat(price)
    setBasket(sum.toFixed(2));
  };

  return (
    <div className="cartDiv">
      {
      render.map(member => {
          return (
            <div className="itemCart">
              <h3>{member.user}</h3>
              <p>{member.price}</p>
              <p>{member.article}</p>
              <button onClick={() => handleDelete(member.id, member.price)}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
};

export default Cart;
