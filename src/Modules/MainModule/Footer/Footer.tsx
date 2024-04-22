import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <h1 className="Footer-about">
        +7 (927) 343-20-93
        <br />
        Muzufa@yandex.ru
      </h1>
      <h3 className="street-text">ул. Пархоменко, 96/98, Уфа</h3>
      <div className="selected-all-button-messanger">
        <a className="button-messangers" href="**">
          <img src={require("../../../UI/img/tg-button.png")} />
        </a>
        <a className="button-messangers" href="**">
          <img src={require("../../../UI/img/inst-button.png")} />
        </a>
        <a className="button-messangers" href="**">
          <img src={require("../../../UI/img/vk-button.png")} />
        </a>
      </div>
    </div>
  );
};
