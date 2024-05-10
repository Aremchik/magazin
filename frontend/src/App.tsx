import React from "react";
import { MainPages } from "./Pages/MainPage/MainPages";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Product } from "./Pages/Product/Product";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Basket } from "./Pages/Basket/Basket";
import { Authorization } from "./Pages/Account/Authorization/Authorization";
import { Navbar } from "./Modules/MainModule/Navbar/Navbar";
import { Registration } from "./Pages/Account/Registration/Registration";
import { Profile } from "./Pages/Account/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<MainPages />} />
        <Route path="/" element={<MainPages />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Account" element={<Product />} />
        <Route path="/Authorization" element={<Authorization />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
