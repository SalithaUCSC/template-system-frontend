import {useEffect, useState} from "react";
import {getTemplates} from "../services/TemplateService";
import Template from "./Template";

const Templates = () => {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        getTemplates().then(res => setTemplates(res.data)).catch(err => console.log(err));
    })
    return (
        <div>
            <h4 className="app-header">Templates</h4>
            <hr/>
            {
                templates.map(data => (
                   <Template key={data.id} template={data}/>
                ))
            }
        </div>
    );
}

export default Templates;
