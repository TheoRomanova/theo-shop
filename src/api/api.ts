import axios from "axios";

// export const instance = axios.create({
//   baseURL: `https://asos2.p.rapidapi.com/`,
//   params: {
//     store: "US",
//     offset: "0",
//     categoryId: "4209",
//     limit: "48",
//     country: "US",
//     sort: "freshness",
//     currency: "USD",
//     sizeSchema: "US",
//     lang: "en-US",
//   },
//   headers: {
//     "X-RapidAPI-Key": "743d38dfabmsh9be1b3e8811e579p139489jsn2ed8194406b3",
//     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//   },
// });

export const instance2 = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "919c28a1-7a21-4b39-9ab7-ca4506ggdb04cb",
  },
});
