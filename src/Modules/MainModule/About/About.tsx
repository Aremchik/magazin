import React from "react";
import "./About-all.css";


export const About = () =>{
    return(
        <div className="about-container">
            <div className="about-all">
                <h1 className="about">О нас</h1>
                <h3 className="about-text">Мы компания из города Уфа, работаем много лет в этой сфере и являемся специалистами своего дела. Мы выбираем только качество ! Как же это нам удается ???
                За счет закупа товара у лучших крупных поставщиков, мы предлагаем отличное качество товара и лучшие цены на них! Не стесняйтесь приходить в наш магазин по адресу:    <a className="a-address" href="https://2gis.ru/ufa/inside/2393172957211422/firm/70000001054749812?m=55.964488%2C54.733213%2F20" target="blank">ул. Пархоменко, 96/98, Уфа</a></h3>
            </div>
            <img className="about-img" src={require("../../../UI/img/about-photo.png")} alt='about-img'/>
        </div>
    )
}