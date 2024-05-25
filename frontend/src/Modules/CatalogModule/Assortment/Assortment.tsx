import React, { useEffect, useState } from "react";
import "./Assortment.css";
import { Modal } from "../../../Components/Modal/Modal";

interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  description: string;
}

interface AssortmentProps {
  selectedCategory: string;
}

export const Assortment: React.FC<AssortmentProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://localhost:7289/api/Catalog/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([
    {
      id: 12,
      category: "",
      title: "",
      price: "",
      description: "",
    },
  ]);

  const updateSelected = (newProduct: Product[]) => {
    setSelectedProduct(newProduct);
  };

  return (
    <>
      <div className="product-categories">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => (setModalActive(true), updateSelected([product]))}
          >
            <img
              className="product-img"
              src={`https://localhost:7289/images/images/${product.category}/${product.category}${product.id}.jpg`}
              alt={product.category}
            />
            <div className="content-text">
              <div className="title-text">{product.title.split(" ")[0]}</div>
              <div className="price-text-desc">{product.title}</div>
              <div className="price-box">
                <div className="price-text">{product.price}р</div>
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
        id={selectedProduct[0].id}
        category={selectedProduct[0].category}
        title={selectedProduct[0].title}
        price={selectedProduct[0].price}
        desc={selectedProduct[0].description}
      />
    </>
  );
};
