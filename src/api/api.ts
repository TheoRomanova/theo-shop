import axios from "axios";
import { GetProductsResponse } from "./types";

export const instance = axios.create({
  baseURL: `https://asos2.p.rapidapi.com/`,
  params: {
    store: "US",
    offset: "0",
    categoryId: "4209",
    limit: "48",
    country: "US",
    sort: "freshness",
    currency: "USD",
    sizeSchema: "US",
    lang: "en-US",
  },
  headers: {
    "X-RapidAPI-Key": "743d38dfabmsh9be1b3e8811e579p139489jsn2ed8194406b3",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
});

export const ProductsApi = {
  async getProducts() {
    return instance
      .get<GetProductsResponse>(`products/v2/list`)
      .then((res) => res.data);
  },
};
