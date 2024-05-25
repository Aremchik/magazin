import React from "react";
import "./Navbar.css";
import { RootState } from "../../../redux/Store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const userid = useSelector((state: RootState) => state.auth.userid);
  const navigate = useNavigate();
  const handleNvigate = () => {
    if (userid) {
      navigate("/basket");
    } else {
      navigate("/authorization");
    }
  };

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
        <a className="button-Navbar" onClick={handleNvigate}>
          Корзина
        </a>
        <a className="button-Navbar" href="/authorization">
          Акканут
        </a>
      </div>
    </div>
  );
};
