import "./styles.scss";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className="shop-page container2">
      <Button palette={"pink"} size={"medium"} onClick={() => navigate("/")}>
        back
      </Button>
      <div> SHOES</div>
    </div>
  );
};

export default React.memo(Shop);
