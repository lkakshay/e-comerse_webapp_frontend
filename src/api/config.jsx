
import axios from "axios";

export default axios.create({
  baseURL: process.env.APP_BASE_URL,
});
