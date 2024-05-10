import React from "react";
import { About } from "../../Modules/MainModule/About/About";
import { Feedback } from "../../Modules/MainModule/Feedback/Feedback";
import { Footer } from "../../Modules/MainModule/Footer/Footer";
import { Maintext } from "../../Modules/MainModule/MainText/maintext";
import { Categories } from "../../Modules/MainModule/Сategories/Categories.1";
import "./MainPages.css";

export const MainPages = () => {
  return (
    <div className="mainpage-container">
      <div className="background-img">
        <div className="welcome-text">
          <h1 className="welcome">Добро пожаловать!!!</h1>
          <h1 className="all-text-muzufa">
            В нашем магазине, вы найдете лучшее музыкальное оборудование,
            музыкальные инструменты и аксессуары для них по НИЗКИМ ЦЕНАМ !
          </h1>
          <a href="/catalog" className="button-next-catalog">
            Магазин
          </a>
        </div>
      </div>
      <Categories />
      <About />
      <Feedback />
      <Footer />
    </div>
  );
};
