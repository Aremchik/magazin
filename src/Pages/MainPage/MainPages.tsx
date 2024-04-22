import React from "react";
import { About } from "../../Modules/MainModule/About/About";
import { Feedback } from "../../Modules/MainModule/Feedback/Feedback";
import { Footer } from "../../Modules/MainModule/Footer/Footer";
import { Header } from "../../Modules/MainModule/Header/header";
import { Maintext } from "../../Modules/MainModule/MainText/maintext";
import { Categories } from "../../Modules/MainModule/Сategories/Categories";
import "./MainPages.css";

export const MainPages = () => {
  return (
    <>
      <div className="background-img">
        <Header />
        <Maintext />
      </div>
      <Categories />
      <About />
      <Feedback />
      <Footer />
    </>
  );
};
