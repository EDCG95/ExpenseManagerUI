import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Access-Control-Allow-Headers": "*",
  },
});
