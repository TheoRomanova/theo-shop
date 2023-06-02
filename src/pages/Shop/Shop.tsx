import React, { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    console.log("hello, shop");
  }, []);
  return <div>SHOES</div>;
};

export default React.memo(Shop);
