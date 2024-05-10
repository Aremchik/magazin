import "./AmountOrders.css";

type BasketItemProps = {
  sum: number;
};

export const AmountOrders: React.FC<BasketItemProps> = ({ sum }) => {
  return (
    <div className="amount-order">
      <h2 className="amount-order-text">Сумма заказов</h2>
      <div className="result-coontainer">
        <div className="result">
          <h3>Итог:</h3>
          <h3>{sum}p</h3>
        </div>
        <button className="pay">Оплатить</button>
      </div>
    </div>
  );
};
