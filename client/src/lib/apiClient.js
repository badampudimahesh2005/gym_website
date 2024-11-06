// src/utils/apiClient.js
import axios from "axios";
import { HOST } from "../utils/constants";

const apiClient = axios.create({
    baseURL: HOST,
    withCredentials: true, // optional, if you're handling cookies/session
});

export default apiClient;
