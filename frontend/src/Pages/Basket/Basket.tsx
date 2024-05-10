import { AmountOrders } from "../../Modules/BasketModules/AmountOrders/AmountOrders";
import { BasketGoods } from "../../Modules/BasketModules/BasketGoods/BasketGoods";
import "./Basket.css";

export const Basket: React.FC = () => {
  return (
    <div className="basket">
      <div className="order-block">
        <BasketGoods />
      </div>
    </div>
  );
};
