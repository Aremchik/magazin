import React, { useState } from "react";
import { Assortment } from "../Modules/CatalogModule/Assortment/Assortment";
import { CategoriesList } from "../Modules/CatalogModule/CategoriesList/CategoriesList";
import { Header } from "../Modules/MainModule/Header/header";
import "./Catalog.css"
import { Modal } from "../Modules/Modal/Modal";

export const Catalog = () =>  {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="catalog-page">
        <div className="catalog-header">
          <Header/>
        </div>
        <div className="catalog-content">
          <CategoriesList onCategoryChange={handleCategoryChange}/>
          <Assortment selectedCategory={selectedCategory}/>
        </div>
    </div>
    
  );
}
