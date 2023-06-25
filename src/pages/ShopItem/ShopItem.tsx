import "./styles.scss";
import { useParams } from "react-router-dom";

export const ShopItemPage = () => {
  const { id } = useParams();

  console.log("params", id);
  return <div className="shop-item_page"></div>;
};
