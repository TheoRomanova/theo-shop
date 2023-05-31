import { v1 } from "uuid";
import a from "../../src/assets/main/a.png";
import d from "../../src/assets/main/d.png";
import f from "../../src/assets/main/f.png";
import g from "../../src/assets/main/g.png";
import h from "../../src/assets/main/h.png";
import i from "../../src/assets/main/i.png";
import k from "../../src/assets/main/k.png";
import l from "../../src/assets/main/l.png";
import o from "../../src/assets/main/o.png";
import p from "../../src/assets/main/p.png";
import r from "../../src/assets/main/r.png";

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
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    photo: a,
    articul: 234,
    price: 70,
    colors: ["blue", "red"],
    sizes: [36, 41],
  },
  {
    id: v1(),
    name: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
    photo: r,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
    photo: f,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "КРОССОВКИ ADIDAS ALPHABOUNCE INSTINCT",
    photo: g,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ФУТБОЛКА NIKE",
    photo: h,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "ОЛИМПИЙКА NIKE",
    photo: i,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    photo: o,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    photo: p,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    photo: k,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
  {
    id: v1(),
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    photo: l,
    articul: 234,
    price: 70,
    colors: ["pink", "yellow"],
    sizes: [37, 38, 40],
  },
];
