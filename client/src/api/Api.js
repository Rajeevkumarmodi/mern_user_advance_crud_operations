import { commonRequest } from "./callApi";
export const BASE_URL = "http://localhost:8000";

// get all user
export const getAllUsersData = async (data, header) => {
  return await commonRequest("GET", `${BASE_URL}/users`, data, header);
};

// user registration
export const userRegistration = async (data, header) => {
  return await commonRequest(
    "POST",
    `${BASE_URL}/user/registration`,
    data,
    header
  );
};

// get single user
export const getSingleUser = async (id, data, header) => {
  return await commonRequest("GET", `${BASE_URL}/user/${id}`, data, header);
};

// delete single user
export const deleteUser = async (id, data, header) => {
  return await commonRequest(
    "DELETE",
    `${BASE_URL}/user/delete/${id}`,
    data,
    header
  );
};
