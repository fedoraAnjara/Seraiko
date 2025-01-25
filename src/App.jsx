// App.js
import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
