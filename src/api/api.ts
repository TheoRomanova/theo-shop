import axios from "axios";

export const instance2 = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "919c28a1-7a21-4b39-9ab7-ca4506ggdb04cb",
  },
});
