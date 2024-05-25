import { useState } from "react";
import "./Modal.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../../redux/Store";
import { useNavigate } from "react-router-dom";

export const Modal = ({
  active,
  setActive,
  title,
  price,
  desc,
  id,
  category,
}: {
  id: number;
  category: string;
  active: boolean;
  setActive: Function;
  title: string;
  price: string;
  desc: string;
}) => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(1);
  const userid = useSelector((state: RootState) => state.auth.userid);
  const handleIncr = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecr = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (userid) {
      axios
        .post(`https://localhost:7289/api/Catalog/addProduct/${userid}`, {
          productId: id,
          quantity: quantity,
        })
        .then((response) => {
          console.log("Product added to the cart:", response.data);
        })
        .catch((error) => {
          console.error("Error adding product to the cart:", error);
        });

      setActive(false);
    } else {
      navigate("/authorization");
    }
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="sel-product-img"
          src={`https://localhost:7289/images/images/${category}/${category}${id}.jpg`}
        />
        <div className="sel-product-container">
          <div className="sel-product-title">{title}</div>
          <div className="sel-product-price">{price}р</div>
          <p className="sel-product-desc">{desc}</p>
          <div className="quantity-selector">
            <div className="quantity-btn-container">
              <button className="quantity-btn" onClick={handleDecr}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={handleIncr}>
                +
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
