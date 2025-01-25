import React from "react";
import useProductStore from "../stores/ProductStore";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useProductStore((state) => state.products);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
