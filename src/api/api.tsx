import axios from "./axios";

export const signUpUser = async (data: any) => {
  try {
    const response = await axios.post("/users", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post("/users/login", JSON.stringify(data), {
      headers: { "Content-Type": "application/json", accept: "*/*" },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getTasksByUser = async () => {
  let stringToken: string = localStorage.getItem("userToken") as string;
  let token = JSON.parse(stringToken).token;
  try {
    const response = await axios.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getUserDetails = async () => {
  let stringToken: string = localStorage.getItem("userToken") as string;
  let token = JSON.parse(stringToken).token;
  try {
    const response = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const addTask = async (data: any) => {
  let stringToken: string = localStorage.getItem("userToken") as string;
  let token = JSON.parse(stringToken).token;
  try {
    const response = await axios.post("/tasks", JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteTask = async (id: any) => {
  let stringToken: string = localStorage.getItem("userToken") as string;
  let token = JSON.parse(stringToken).token;
  try {
    const response = await axios.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
