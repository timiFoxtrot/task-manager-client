import axios from "axios";

const BASE_URL = "http://127.0.0.1:8008";

export default axios.create({
  baseURL: BASE_URL,
});
