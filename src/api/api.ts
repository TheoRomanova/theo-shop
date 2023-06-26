import axios from "axios";
import { GetProductInfoResponse, GetProductsResponse } from "./types";

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

  async getMoreProductInfo(id: number) {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: `${id}`,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "743d38dfabmsh9be1b3e8811e579p139489jsn2ed8194406b3",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response: GetProductInfoResponse = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
