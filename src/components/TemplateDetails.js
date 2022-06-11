import {useEffect, useState} from "react";
import {getTemplateById} from "../services/TemplateService";
import {useParams} from "react-router-dom";

const TemplateDetails = () => {
    const [template, setTemplate] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getTemplateById(id).then(res => setTemplate(res.data)).catch(err => console.log(err));
    })
    return (
        <div className="app-details">template: {template.description}</div>
    );
}

export default TemplateDetails;
