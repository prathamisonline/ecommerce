/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// const url = import.meta.env.VITE_URL;
const url = "http://localhost:4001/api/v1/";

type createDataType = {
  userData: any;
  endpoints: string;
};

export const createData = async ({ userData, endpoints }: createDataType) => {
  try {
    const { data } = await axios.post(`${url}${endpoints}`, userData);
    return data;
  } catch (error: any) {
    throw error.response || error.response.message;
  }
};

export const loginUser = async ({ userData, endpoints }: createDataType) => {
  try {
    const { data } = await axios.post(`${url}${endpoints}`, userData);
    return data;
  } catch (error: any) {
    throw error.response || error.response.message;
  }
};

export const getData = async (endpoints: string) => {
  try {
    const { data } = await axios.get(`${url}${endpoints}`);
    return data;
  } catch (error: any) {
    throw error.response || error.response.data.message;
  }
};

export const deleteData = async (endpoints: string) => {
  try {
    const { data } = await axios.delete(`${url}${endpoints}`);
    return data;
  } catch (error: any) {
    throw error.response || error.response.message;
  }
};

export const updateData = async ({ userData, endpoints }: createDataType) => {
  try {
    const { data } = await axios.put(`${url}${endpoints}`, userData);
    return data;
  } catch (error: any) {
    throw error.response || error.response.message;
  }
};
