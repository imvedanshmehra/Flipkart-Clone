import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/sk-store-2b052/us-central1/api",
 
});

export default instance;
