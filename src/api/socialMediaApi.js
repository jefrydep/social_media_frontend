import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const {VITE_API_URL}=getEnvVariables();

const loginApi= axios.create({
    baseURL:VITE_API_URL
})

export default loginApi;