import { commonRequest } from "./callApi";
export const BASE_URL = "http://localhost:8000";

export const getAllUserSData = async (data, header) => {
  return await commonRequest("GET", `${BASE_URL}/users`, data, header);
};
