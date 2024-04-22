import React from "react";
import { MainPages } from "../src/Pages/MainPages";
import { Catalog } from "../src/Pages/Catalog";
import { Product } from "./Pages/Product";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
