import axios from "axios";

export const api = axios.create({ baseURL: "https://motor-shop-t14.onrender.com", timeout: 15000 });
