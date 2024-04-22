import "./Modal.css";

export const Modal = ({
  active,
  setActive,
  title,
  price,
  img,
  desc,
}: {
  active: boolean;
  setActive: Function;
  title: string;
  price: string;
  img: string;
  desc: string;
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="sel-product-img" src={require(`../../UI/${img}`)} />
        <div className="sel-product-text">
          <div className="sel-product-title">{title}</div>
          <div className="sel-product-price">{price}</div>
          <p className="sel-product-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};
