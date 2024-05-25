import { useEffect, useState } from "react";
import "./BasketGoods.css";
import { BasketItem } from "./BasketItem";
import { AmountOrders } from "../AmountOrders/AmountOrders";
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

export const BasketGoods: React.FC = () => {
  const userid = useSelector((state: RootState) => state.auth.userid);
  const [cartData, setCartData] = useState<CartData[]>([]);

  const calculateTotalSum = (products: CartData[]): number => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.product.price * product.numberitems;
    });
    return sum;
  };

  const [totalSum, setTotalSum] = useState<number>(calculateTotalSum(cartData));

  const updateTotalSum = (newSum: number) => {
    setTotalSum(newSum);
  };
  const fetchCartData = () => {
    axios
      .get(`https://localhost:7289/api/Catalog/getUserCart/${userid}`)
      .then((response) => {
        const cartDataFromApi: CartData[] = response.data;
        setCartData(cartDataFromApi);
        setTotalSum(calculateTotalSum(cartDataFromApi));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  const handleProductDelete = (productId: number) => {
    axios
      .delete(`https://localhost:7289/api/Catalog/deleteProduct/${userid}`, {
        data: {
          productId: productId,
        },
      })
      .then(() => {
        fetchCartData();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  const renderProducts = (product: CartData): JSX.Element[] => {
    const renderedProducts: JSX.Element[] = [];
    for (let i = 0; i < product.numberitems; i++) {
      renderedProducts.push(
        <div className="scroll-item">
          <BasketItem
            key={product.product.id + i}
            productsData={product}
            updateTotalSum={updateTotalSum}
            totalSum={totalSum}
            handleProductDelete={handleProductDelete}
          />
        </div>
      );
    }
    return renderedProducts;
  };

  return (
    <div className="order-basket">
      <div className="basket-goods-block">
        <h2>Ваша корзина товаров</h2>
        <div className="scroll-container">
          {cartData.map((item) => renderProducts(item))}
        </div>
      </div>
      <AmountOrders sum={totalSum} />
    </div>
  );
};
