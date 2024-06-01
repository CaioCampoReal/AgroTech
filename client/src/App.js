import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import api from "./services/api"
import AddProduct from "./components/AddProduct";
function App() {

  return (
    <div>
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;