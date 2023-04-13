import axios from "axios";
import { url } from "../index";

export const adminLogin = async (data) => {
  try {
    const result = await axios.post(`${url}/login`, data);
    return result.data;
  } catch (err) {
    console.log(`The error in adminLogin is : ${err}`);
  }
};

export const getAllData = async () => {
  try {
    const result = await axios.get(`${url}/`);
    return result.data;
  } catch (err) {
    console.log(`The error in getAllData is : ${err}`);
  }
};

const key = localStorage.getItem("admin");
const token = JSON.parse(key);

export const addSkill = async (data) => {
  try {
    const res = await axios.post(
      `${url}/skills`,
      data,
      { headers: { Authorization: token } }
    );
    return res.data;
  } catch (err) {
    console.log(`The error in addSkill is : ${err}`);
  }
};
