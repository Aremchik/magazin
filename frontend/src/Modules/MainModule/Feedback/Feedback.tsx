import React from "react";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <div className="Feedback-container">
      <h1 className="feedback-text-question">Желаете сделать крупный заказ?</h1>
      <div className="feedback-text-request">
        Напишите нам на почту или свяжитесь по телефону:
        <br />
        Muzufa@yandex.ru
        <br />
        +7 (927) 236-36-73
        <br />
        <strong>Не подходит ни один из способов?</strong>
      </div>
      <div className="feedback-text-give-number">
        Оставьте свой номер, наши операторы свяжутся с вами в ближайшее время !
      </div>

      <div className="selected-post-number-button">
        <input
          className="input-number-post"
          placeholder={"Номер телефона..."}
        />
        <button className="style-button-next-bd">
          Отправить номер телефона
        </button>
      </div>
    </div>
  );
};
