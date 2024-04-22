import React, { useState } from "react";
import { Assortment } from "../../Modules/CatalogModule/Assortment/Assortment";
import { CategoriesList } from "../../Modules/CatalogModule/CategoriesList/CategoriesList";
import { Header } from "../../Modules/MainModule/Header/header";
import "./Catalog.css";
import { Modal } from "../../Components/Modal/Modal";

export const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <Header />
      </div>
      <div className="catalog-content">
        <CategoriesList onCategoryChange={handleCategoryChange} />
        <Assortment selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};
