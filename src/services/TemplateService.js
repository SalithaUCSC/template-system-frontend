import axios from "axios";

export const getTemplates = () => {
    return axios.get("http://localhost:9000/api/templates");
}

export const getTemplateById = (id) => {
    return axios.get("http://localhost:9000/api/templates/id/" + id);
}
