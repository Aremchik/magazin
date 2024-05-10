import "./Product.css";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  info: string;
}

const product: Product[] = [
  {
    id: 1,
    title: "Гитара с фоном говна",
    price: "100p",
    image: "ukul.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus purus nec nulla faucibus luctus. Nulla sagittis tempor nisl sed maximus. Morbi augue metus, venenatis ut tempor eget, blandit id felis. Nam auctor lobortis augue sed tincidunt. Duis felis neque, hendrerit non odio eu, pharetra molestie nunc. Proin egestas at nisi nec convallis. Donec mattis velit vitae quam hendrerit, nec sollicitudin risus ultrices. Pellentesque urna velit, congue ut tellus vitae, placerat tempus orci. Nulla condimentum sed libero vitae dictum.",
    info: "",
  },
];

export const Product: React.FC = () => {
  return (
    <div className="selected-product-page">
      <div className="selected-product-content">
        <h1>{product[0].title}</h1>
        <div className="selected-product-price-block">
          <img
            className="selected-product-img"
            src={require(`../../UI/${product[0].image}`)}
            alt={product[0].title}
          />
          <div className="price-block">
            <div className="selected-product-price">{product[0].price}</div>
            <div className="selected-product-price-text">
              Чтобы оформить заказ, свяжитесь с нами
            </div>
          </div>
        </div>

        <div className="desc-block">
          <h2>Описание</h2>
          <div className="selected-product-desc">{product[0].description}</div>
        </div>
        <h2>Характеристики</h2>
      </div>
    </div>
  );
};
