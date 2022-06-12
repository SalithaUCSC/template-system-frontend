import axios from "axios";
import {HOST, PORT, API_CARDS, API_TEMPLATES} from "../AppConstants";

export const getTemplates = () => {
    return axios.get(`${HOST}:${PORT}${API_TEMPLATES}`);
}

export const getTemplateById = (id) => {
    return axios.get(`${HOST}:${PORT}${API_TEMPLATES}/id/` + id);
}

export const addCardToTemplate = (data) => {
    return axios.post(`${HOST}:${PORT}${API_CARDS}/add`, data);
}

export const addTemplate = (data) => {
    return axios.post(`${HOST}:${PORT}${API_TEMPLATES}`, data);
}
