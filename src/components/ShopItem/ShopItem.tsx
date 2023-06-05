import "./styles.scss";

import { ShopItemType } from "../../data/data";

interface Props {
  shopItem: ShopItemType;
}

export const ShopItem = ({ shopItem }: Props) => {
  return (
    <div className="shop-item">
      <img src={shopItem.photo}></img>
      <div className="description">
        <p>{shopItem.name}</p>
        <span>item number: {shopItem.articul}</span>
        <div className="price-favorites">
          <p className="price">{shopItem.price} ₽</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};
