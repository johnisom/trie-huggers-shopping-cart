import React from "react";
import ShoppingCartContainer from "./ShoppingCartContainer";
import ProductListContainer from "./ProductListContainer";
import AddProductForm from "./AddProductForm";
import axios from "axios";

// TODO: implement redux with cart

const ShopApp = () => (
  <div id="app">
    <ShoppingCartContainer />

    <main>
      <ProductListContainer />
      <AddProductForm />
    </main>
  </div>
);

export default ShopApp;
