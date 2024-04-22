import { BasketGoods } from "../../Modules/BasketModules/BasketGoods/BasketGoods";
import { Header } from "../../Modules/MainModule/Header/header";
import "./Basket.css";

export const Basket: React.FC = () => {
  return (
    <div className="basket">
      <div className="basket-header">
        <Header />
      </div>
      <div className="order-block">
        <BasketGoods />
      </div>
    </div>
  );
};
