import { ShopItemType } from "../../data/data";

export const ShopItem = ({
  id,
  name,
  photo,
  articul,
  price,
  colors,
  sizes,
}: ShopItemType) => {
  return (
    <li key={id} className="best-item">
      <img src={photo} alt="shoes" />
      <div className="best-item_description">
        <div className="name">{name}</div>
        <p>
          <b>item number:</b> {articul}
        </p>
        <span className="price">{price}$</span>
      </div>
    </li>
  );
};
