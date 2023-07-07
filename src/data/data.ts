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

export const shoesBrandNames = [
  "ASOS DESIGN",
  "New Balance",
  "Lacoste",
  "Base London",
  "House of Hounds",
  "adidas Originals",
  "Nike Training",
  "Vans",
  "New Look",
  "Nike",
  "River Island",
  "Ted Baker",
  "Havaianas",
  "Dr Martens",
  "Superdry",
  "Selected Homme",
  "H by Hudson",
  "Calvin Klein Jeans",
  "Jack & Jones",
  "Truffle Collection",
  "Puma",
  "Reebok",
  "HUGO",
  "Converse",
  "Ben Sherman",
].sort();

const OFF_WHITE = "Off white";
const SAGE_CROC = "SAGE CROC";
const BLACK_LEATHER = "BLACK LEATHER";
const BRIGHT_WHITE = "Bright White";
const MID_BLUE = "MID BLUE";
const SPROUT_GREEN = "Sprout green";
const SAND_FAUX_SUEDE = "SAND FAUX SUEDE";
const PALE_BLUE = "Pale blue";

const MID_GREEN = "MID GREEN";
const TAN_LEATHER = "Tan leather";

export const colors = [
  { Tan: "#D2B48C" },
  { Mint: "#3EB489" },
  { Black: "#000000" },
  { White: "#F9F6EE" },
  {
    Multi:
      "linear-gradient(to right, #f259b0, #fe677a, #ed8556, #cda04f, #aab566, #82bc7a, #54bf98, #00bfb9, #00b5dd, #00a6ff, #008cff, #8f5ffb",
  },
  { Navy: "#000080" },
  { [OFF_WHITE]: "rgb(250, 249, 246)" },
  { Red: "#ff0000" },
  { Green: "#00FF00" },
  { Gray: "#808080" },
  { Brown: "#964B00" },
  { Stone: "#99CCFF" },
  { [SAGE_CROC]: "#bcb88a" },
  { [BLACK_LEATHER]: "#253529" },
  { Anthracite: "#353C40" },
  { [BRIGHT_WHITE]: "#FFFFFF" },
  { [MID_BLUE]: "#276ab3" },
  { [SPROUT_GREEN]: "#C7E1BA" },
  { [SAND_FAUX_SUEDE]: "#CFC5B4" },
  { [PALE_BLUE]: "#ADD8E6" },
  { CREAM: "#FFFDD0" },
  { Khaki: "#F0E68C" },
  { [MID_GREEN]: "#4d8c57 " },
  { IVORY: "#FFFFF0" },
  { [TAN_LEATHER]: "#D2B48C" },
  { PINK: "#FFC0CB" },
  { Taupe: "#483C32" },
];
