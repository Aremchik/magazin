import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">MUZUFA</h1>
      <div className="menu">
        <a className="button-header" href="/">
          Главная
        </a>
        <a className="button-header" href="/catalog">
          Каталог
        </a>
        <a className="button-header" href="/basket">
          Корзина
        </a>
        <a className="button-header" href="/">
          Акканут
        </a>
      </div>
    </div>
  );
};
