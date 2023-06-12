export interface ShopItemType {
  id: string;
  name: string;
  photo: string;
  articul: number;
  price: number;
  colors?: Array<string>;
  sizes?: Array<number>;
}

export const getSizes = (start: number, end: number) => {
  const sizes = [];
  for (let i = start; i <= end; i++) {
    sizes.push(i);
  }
  return sizes;
};

const OFF_WHITE = "Off white";

export const colors = [
  { Tan: "#D2B48C" },
  { Mint: "#3EB489" },
  { Black: "#000000" },
  { White: "#FFFFFF" },
  {
    Multi:
      "linear-gradient(to right, #f259b0, #fe677a, #ed8556, #cda04f, #aab566, #82bc7a, #54bf98, #00bfb9, #00b5dd, #00a6ff, #008cff, #8f5ffb",
  },
  { Navy: "#000080" },
  { [OFF_WHITE]: "rgb(237, 234, 222)" },
  { Red: "#ff0000" },
  { Green: "#00FF00" },
  { Gray: "#808080" },
  { Brown: "#964B00" },
  { Stone: "#99CCFF" },
];
