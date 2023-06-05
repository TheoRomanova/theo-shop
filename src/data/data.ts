import { v1 } from "uuid";

import r from "../../src/assets/main/r.png";
import photo from "../../src/assets/main/tshirt.png";

export interface ShopItemType {
  id: string;
  name: string;
  photo: string;
  articul: number;
  price: number;
  colors?: Array<string>;
  sizes?: Array<number>;
}

export const clothes: Array<ShopItemType> = [
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["blue", "red"],
    sizes: [36, 41],
  },
  {
    id: v1(),
    name: "ADIDAS EQT SUPPORT ADV PK",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS EQT SUPPORT ADV PK",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS ALPHABOUNCE INSTINCT",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "TSHIRT NIKE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "TSHIRT NIKE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: " ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "TSHIRT NIKE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: " ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: " ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ADIDAS YEEZY SLIDE",
    photo,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
];

export const getSizes = (start: number, end: number) => {
  const sizes = [];
  for (let i = start; i <= end; i++) {
    sizes.push(i);
  }
  return sizes;
};

export const colors = [
  { black: "#29292D" },
  { white: "#B3C0D2" },
  { pink: "#FFE1E1" },
  { red: "#D92A27" },
  { blue: "#76DECB" },
  { dark_blue: "#336CBD" },
  { purple: "#A13FBA" },
  { light_green: "#2C830E" },
  { dark_green: "#2E4824" },
  { yellow: "#EBEF31" },
  { black: "#29292D" },
  { light_grey: "#C4C4C4" },
];
