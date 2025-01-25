import React from "react";
import useCartStore from "../stores/CartStore";

const ProductItem = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductItem;
