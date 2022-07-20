import axios from "axios";

var Api = axios.create({ baseURL: "http://localhost:3001" });

export default Api;
