import React from "react";
import { MainPages } from "./Pages/MainPage/MainPages";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Product } from "./Pages/Product/Product";
import { Outlet } from "react-router-dom";
import { Basket } from "./Pages/Basket/Basket";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
