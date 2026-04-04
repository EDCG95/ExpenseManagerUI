import { apiClient } from "./client";
import { ENDPOINT } from "../utils/consts/endpoints";

export async function getWage() {
  const response = await apiClient.get(ENDPOINT.WAGE);
  return response?.data;
}

export async function addWage(data) {
  await apiClient.put(ENDPOINT.WAGE, data);
}

export async function addDebt(data) {
  await apiClient.put(ENDPOINT.DEBT, data);
}

export async function getDebtTypes() {
  const response = await apiClient.get(ENDPOINT.DEBT_TYPE);
  return response?.data;
}
