import axios from "axios";

const PORT = "8000";
const HOST = "http://localhost";

export const getTemplates = () => {
    return axios.get(`${HOST}:${PORT}/api/templates`);
}

export const getTemplateById = (id) => {
    return axios.get(`${HOST}:${PORT}/api/templates/id/` + id);
}

export const addCardToTemplate = (data) => {
    return axios.post(`${HOST}:${PORT}/api/cards/add`, data);
}

export const addTemplate = (data) => {
    return axios.post(`${HOST}:${PORT}/api/templates`, data);
}
