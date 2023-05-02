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
    const res = await axios.post(`${url}/skills`, data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in addSkill is : ${err}`);
  }
};

export const addProject = async (data) => {
  try {
    const res = await axios.post(`${url}/projects`, data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in addProject is : ${err}`);
  }
};
export const addContact = async (data) => {
  try {
    const res = await axios.post(`${url}/contacts`, data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in addContact is : ${err}`);
  }
};

export const updateAboutInfo = async (data) => {
  try {
    const res = await axios.put(`${url}/about`, data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in updateAboutInfo is : ${err}`);
  }
};

export const updateTheSkill = async (data) => {
  try {
    const res = await axios.put(`${url}/skills/${data.id}`, data.data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in updateTheSkill is : ${err}`);
  }
};
export const updateTheProject = async (data) => {
  try {
    const res = await axios.put(`${url}/projects/${data.id}`, data.data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in updateTheProject is : ${err}`);
  }
};

export const updateTheContact = async (data) => {
  try {
    const res = await axios.put(`${url}/contacts/${data.id}`, data.data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in updateTheContact is : ${err}`);
  }
};

export const deleteTheSkill = async (id) => {
  try {
    const res = await axios.delete(`${url}/skills/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in deleteTheSkill is : ${err}`);
  }
};

export const deleteTheProject = async (id) => {
  try {
    const res = await axios.delete(`${url}/projects/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in deleteTheProject is : ${err}`);
  }
};

export const deleteTheContact = async (id) => {
  try {
    const res = await axios.delete(`${url}/contacts/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(`The error in deleteTheContact is : ${err}`);
  }
};
