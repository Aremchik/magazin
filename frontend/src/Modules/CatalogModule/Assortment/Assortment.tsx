import React, { useState } from "react";
import "./Assortment.css";
import { Modal } from "../../../Components/Modal/Modal";

interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

interface AssortmentProps {
  selectedCategory: string;
}

export const Assortment: React.FC<AssortmentProps> = ({ selectedCategory }) => {
  const products: Product[] = [
    {
      id: 1,
      category: "guitar",
      title: "AC100-SG Классическая гитара 4/4, глянцевая, Cort",
      price: "1000p",
      description:
        "Гитара сделана в Индонезии!Переработанная традиционная модель AC с улучшенным резонансом и подлинным классическим звучанием. Удачное сочетание пород древесины дает традиционное, глубокое и восхитительно мягкое звучание. Гитары серии AC снисходительны к студенческим ошибкам и требуют немного меньше точности и четкости для хорошего звучания.Верхняя дека из ели.Ель обладает идеальным балансом между прочностью и гибкостью. Этим объясняется чрезвычайная популярность применения этой древесины в качестве материала для верхней деки акустических гитар. Имея столь универсальный характер звучания, ель отлично подходит для различных музыкальных жанров и стилей игры.Нижняя дека и обечайка из красного дерева.Яркое, но естественное, с сильной и теплой серединой, красное дерево остается стандартом для задней деки и обечайки акустических гитар в течении многих десятилетий.Улучшенное распределение пружин.Традиционная для классических гитар система пружин, увеличивающая вибрационные характеристики нейлоновых струн.С-образный профиль грифа.Наиболее популярная и широко используемая форма грифа применяется и на классических гитарах.Завиток головки грифа.Завиток увеличивает чувство комфорта для большого пальца левой руки во время игры.Струны Savarez.Классические нейлоновые нити с покрытием противостоят обесцвечиванию и коррозии лучше, чем обычные, сохраняя при этом живость и мощь. Даже если на гитаре не играли недели и даже месяцы, струны выглядят, ощущаются и звучат как свежие.",
      image: "ukul.png",
    },
    {
      id: 2,
      category: "ukulele",
      title: "AC100-SG Классическая гитара 4/4, глянцевая, Cort",
      price: "1020p",
      description:
        "Гитара сделана в Индонезии!Переработанная традиционная модель AC с улучшенным резонансом и подлинным классическим звучанием. Удачное сочетание пород древесины дает традиционное, глубокое и восхитительно мягкое звучание. Гитары серии AC снисходительны к студенческим ошибкам и требуют немного меньше точности и четкости для хорошего звучания.Верхняя дека из ели.Ель обладает идеальным балансом между прочностью и гибкостью. Этим объясняется чрезвычайная популярность применения этой древесины в качестве материала для верхней деки акустических гитар. Имея столь универсальный характер звучания, ель отлично подходит для различных музыкальных жанров и стилей игры.Нижняя дека и обечайка из красного дерева.Яркое, но естественное, с сильной и теплой серединой, красное дерево остается стандартом для задней деки и обечайки акустических гитар в течении многих десятилетий.Улучшенное распределение пружин.Традиционная для классических гитар система пружин, увеличивающая вибрационные характеристики нейлоновых струн.С-образный профиль грифа.Наиболее популярная и широко используемая форма грифа применяется и на классических гитарах.Завиток головки грифа.Завиток увеличивает чувство комфорта для большого пальца левой руки во время игры.Струны Savarez.Классические нейлоновые нити с покрытием противостоят обесцвечиванию и коррозии лучше, чем обычные, сохраняя при этом живость и мощь. Даже если на гитаре не играли недели и даже месяцы, струны выглядят, ощущаются и звучат как свежие.",
      image: "ukul.png",
    },
    {
      id: 3,
      category: "ukulele",
      title: "AC100-SG Классическая гитара 4/4, глянцевая, Cort",
      price: "1030p",
      description:
        "Гитара сделана в Индонезии!Переработанная традиционная модель AC с улучшенным резонансом и подлинным классическим звучанием. Удачное сочетание пород древесины дает традиционное, глубокое и восхитительно мягкое звучание. Гитары серии AC снисходительны к студенческим ошибкам и требуют немного меньше точности и четкости для хорошего звучания.Верхняя дека из ели.Ель обладает идеальным балансом между прочностью и гибкостью. Этим объясняется чрезвычайная популярность применения этой древесины в качестве материала для верхней деки акустических гитар. Имея столь универсальный характер звучания, ель отлично подходит для различных музыкальных жанров и стилей игры.Нижняя дека и обечайка из красного дерева.Яркое, но естественное, с сильной и теплой серединой, красное дерево остается стандартом для задней деки и обечайки акустических гитар в течении многих десятилетий.Улучшенное распределение пружин.Традиционная для классических гитар система пружин, увеличивающая вибрационные характеристики нейлоновых струн.С-образный профиль грифа.Наиболее популярная и широко используемая форма грифа применяется и на классических гитарах.Завиток головки грифа.Завиток увеличивает чувство комфорта для большого пальца левой руки во время игры.Струны Savarez.Классические нейлоновые нити с покрытием противостоят обесцвечиванию и коррозии лучше, чем обычные, сохраняя при этом живость и мощь. Даже если на гитаре не играли недели и даже месяцы, струны выглядят, ощущаются и звучат как свежие.",
      image: "ukul.png",
    },
    {
      id: 4,
      category: "equipment",
      title: "AC100-SG Классическая гитара 4/4, глянцевая, Cort",
      price: "1100p",
      description:
        "Гитара сделана в Индонезии!Переработанная традиционная модель AC с улучшенным резонансом и подлинным классическим звучанием. Удачное сочетание пород древесины дает традиционное, глубокое и восхитительно мягкое звучание. Гитары серии AC снисходительны к студенческим ошибкам и требуют немного меньше точности и четкости для хорошего звучания.Верхняя дека из ели.Ель обладает идеальным балансом между прочностью и гибкостью. Этим объясняется чрезвычайная популярность применения этой древесины в качестве материала для верхней деки акустических гитар. Имея столь универсальный характер звучания, ель отлично подходит для различных музыкальных жанров и стилей игры.Нижняя дека и обечайка из красного дерева.Яркое, но естественное, с сильной и теплой серединой, красное дерево остается стандартом для задней деки и обечайки акустических гитар в течении многих десятилетий.Улучшенное распределение пружин.Традиционная для классических гитар система пружин, увеличивающая вибрационные характеристики нейлоновых струн.С-образный профиль грифа.Наиболее популярная и широко используемая форма грифа применяется и на классических гитарах.Завиток головки грифа.Завиток увеличивает чувство комфорта для большого пальца левой руки во время игры.Струны Savarez.Классические нейлоновые нити с покрытием противостоят обесцвечиванию и коррозии лучше, чем обычные, сохраняя при этом живость и мощь. Даже если на гитаре не играли недели и даже месяцы, струны выглядят, ощущаются и звучат как свежие.",
      image: "ukul.png",
    },
    {
      id: 5,
      category: "guitar",
      title: "AC100-SG Классическая гитара 4/4, глянцевая, Cort",
      price: "1002p",
      description:
        "Гитара сделана в Индонезии!Переработанная традиционная модель AC с улучшенным резонансом и подлинным классическим звучанием. Удачное сочетание пород древесины дает традиционное, глубокое и восхитительно мягкое звучание. Гитары серии AC снисходительны к студенческим ошибкам и требуют немного меньше точности и четкости для хорошего звучания.Верхняя дека из ели.Ель обладает идеальным балансом между прочностью и гибкостью. Этим объясняется чрезвычайная популярность применения этой древесины в качестве материала для верхней деки акустических гитар. Имея столь универсальный характер звучания, ель отлично подходит для различных музыкальных жанров и стилей игры.Нижняя дека и обечайка из красного дерева.Яркое, но естественное, с сильной и теплой серединой, красное дерево остается стандартом для задней деки и обечайки акустических гитар в течении многих десятилетий.Улучшенное распределение пружин.Традиционная для классических гитар система пружин, увеличивающая вибрационные характеристики нейлоновых струн.С-образный профиль грифа.Наиболее популярная и широко используемая форма грифа применяется и на классических гитарах.Завиток головки грифа.Завиток увеличивает чувство комфорта для большого пальца левой руки во время игры.Струны Savarez.Классические нейлоновые нити с покрытием противостоят обесцвечиванию и коррозии лучше, чем обычные, сохраняя при этом живость и мощь. Даже если на гитаре не играли недели и даже месяцы, струны выглядят, ощущаются и звучат как свежие.",
      image: "ukul.png",
    },
  ];

  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([
    "",
    "",
    "guitar.png",
    "",
  ]);

  const updateSelected = (newProduct: [string, string, string, string]) => {
    setSelectedProduct(newProduct);
  };

  return (
    <>
      <div className="product-categories">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => (
              setModalActive(true),
              updateSelected([
                product.title,
                product.price,
                product.image,
                product.description,
              ])
            )}
          >
            <img
              className="product-img"
              src={require(`../../../UI/${product.image}`)}
              alt={product.category}
            />
            <div className="content-text">
              <div className="title-text">{product.title}</div>
              <div className="price-text-desc">{product.title}</div>
              <div className="price-box">
                <div className="price-text">{product.price}</div>
                <img
                  className="plus-img"
                  src={require("../../../UI/img/plus.png")}
                  alt={product.category}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={selectedProduct[0]}
        price={selectedProduct[1]}
        img={selectedProduct[2]}
        desc={selectedProduct[3]}
      />
    </>
  );
};