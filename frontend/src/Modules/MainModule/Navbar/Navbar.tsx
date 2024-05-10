import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="logo">MUZТОРГ</h1>
      <div className="menu">
        <a className="button-Navbar" href="/">
          Главная
        </a>
        <a className="button-Navbar" href="/catalog">
          Каталог
        </a>
        <a className="button-Navbar" href="/basket">
          Корзина
        </a>
        <a className="button-Navbar" href="/authorization">
          Акканут
        </a>
      </div>
    </div>
  );
};
