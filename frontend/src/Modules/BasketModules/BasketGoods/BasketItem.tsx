import { useState } from "react";
import "./BasketGoods.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";

interface CartData {
  orderid: number;
  productid: number;
  orderedproductid: number;
  numberitems: number;
  order: {
    orderid: number;
    userid: number;
    totalamount: number;
    orderdate: string;
    user: any;
  };
  product: {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
  };
}

type BasketItemProps = {
  productsData: CartData;
  updateTotalSum: (newSum: number) => void;
  totalSum: number;
  handleProductDelete: (productId: number) => void;
};

export const BasketItem: React.FC<BasketItemProps> = ({
  productsData,
  updateTotalSum,
  totalSum,
  handleProductDelete,
}) => {
  return (
    <div className="item-block">
      <>
        <img
          className="item-img"
          src={`https://localhost:7289/images/images/${productsData.product.category}/${productsData.product.category}${productsData.product.id}.jpg`}
        />
        <div className="item-name-block">
          <div className="item-name">{productsData.product.title}</div>
          <div className="item-price">{productsData.product.price}p</div>
        </div>
        <div className="sum-block">
          <div className="counter-container">
            <button
              className="button"
              onClick={() => handleProductDelete(productsData.productid)}
            >
              X
            </button>
          </div>
        </div>
      </>
      <hr />
    </div>
  );
};
