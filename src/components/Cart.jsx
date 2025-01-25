import React from "react";
import useCartStore from "../stores/CartStore";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <h3>Total : {totalPrice} €</h3>
    </div>
  );
};

export default Cart;
