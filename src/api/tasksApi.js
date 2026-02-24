import axios from "axios";

const API_URL = "http://localhost:4000/tasks";

export const getTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTask = async (task) => {
  const { data } = await axios.post(API_URL, task);
  return data;
};

export const updateTask = async (id, updated) => {
  const { data } = await axios.patch(`${API_URL}/${id}`, updated);
  return data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};