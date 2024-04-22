import { useState } from "react";
import "./BasketGoods.css";

interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  description: string;
  image: string;
  number_items: number;
}

type BasketItemProps = {
  product: Product;
};

export const BasketItem: React.FC<BasketItemProps> = ({ product }) => {
  const [numberItems, setNumberItems] = useState<number>(1);
  const [sumItems, setSumItems] = useState<number>(product.price);

  const incrementCount = (num: number) => {
    setNumberItems(numberItems + 1);
    setSumItems(num + sumItems);
  };

  const decrementCount = (num: number) => {
    if (numberItems > 1) {
      setNumberItems(numberItems - 1);
      setSumItems(sumItems - num);
    }
  };

  return (
    <div className="item-block">
      <>
        <img
          className="item-img"
          src={require(`../../../UI/${product.image}`)}
          alt={product.category}
        />
        <div className="item-name-block">
          <div className="item-name">{product.title}</div>
          <div className="item-price">{product.price}p</div>
        </div>
        <div className="sum-block">
          <div className="sum-items">{sumItems}</div>
          <div className="counter-container">
            <button
              className="button"
              onClick={() => decrementCount(product.price)}
            >
              -
            </button>
            <span className="count">{numberItems}</span>
            <button
              className="button"
              onClick={() => incrementCount(product.price)}
            >
              +
            </button>
          </div>
        </div>
      </>
      <hr />
    </div>
  );
};
