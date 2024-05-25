import React from "react";
import "./Categories.css";

export const Categories = () => {
  return (
    <div className="container">
      <div className="">
        <div className="text-name">Категории магазина</div>
        <div className="text-name-shorts">
          Найдется любая подходящая категория для вас!
        </div>
      </div>

      <div className="blocks-pay">
        <a href="/catalog" className="pay-block-1">
          <h1 className="h1-text">Клавишные</h1>
        </a>
        <a href="/catalog" className="pay-block-2">
          <h1 className="h1-text">Гитары</h1>с
        </a>
        <a href="/catalog" className="pay-block-3">
          <h1 className="h1-text">Гитары</h1>
        </a>
        <a href="/catalog" className="pay-block-4">
          <h1 className="h1-text">Духовые</h1>
        </a>
        <a href="/catalog" className="pay-block-5">
          <h1 className="h1-text">Ударные</h1>
        </a>
        <a href="/catalog" className="pay-block-6">
          <h1 className="h1-text">Оборудывание</h1>
        </a>
      </div>
    </div>
  );
};
