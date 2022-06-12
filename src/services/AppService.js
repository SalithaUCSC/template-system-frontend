import axios from "axios";
import {HOST, PORT} from "../AppConstants";

export const getAppMetrics = () => {
    return axios.get(`${HOST}:${PORT}/admin/health`);
}