import "./AmountOrders.css";

type BasketItemProps = {
  sum: number;
};

export const AmountOrders: React.FC<BasketItemProps> = ({ sum }) => {
  const hadlePay = () => {
    if (sum) {
      alert("Успех");
    } else {
      alert("Не успех");
    }
  };
  return (
    <div className="amount-order">
      <h2 className="amount-order-text">Сумма заказов</h2>
      <div className="result-coontainer">
        <div className="result">
          <h3>Итог:</h3>
          <h3>{sum}p</h3>
        </div>
        <button className="pay" onClick={hadlePay}>
          Оплатить
        </button>
      </div>
    </div>
  );
};
