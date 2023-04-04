import axios from "axios";

const url = "http://localhost:5000";

export const loginUser = async (data) => {
  const token = localStorage.getItem("user");
  const key = JSON.parse(token);
  
  try {
    const result = await axios.post(
      `${url}/login`,
      {
        body: data,
      },
      {
        headers: key,
      }
    );
    return result.data;
  } catch (err) {
    console.log(`The error in loginUser is : ${err}`);
  }
};
