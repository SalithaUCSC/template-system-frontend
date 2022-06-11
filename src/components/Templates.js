import {useEffect, useState} from "react";
import {getTemplates} from "../services/TemplateService";
import Template from "./Template";
import React from "react";
import {showAlert} from "../services/AlertService";

const Templates = () => {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        getTemplates()
            .then(res => setTemplates(res.data))
            .catch(err => showAlert('Unable to Load!', 'error', err.message));
    })
    return (
        <div className="container app-container">
            <div className="app-header"><h2>Dynamic Workflow Templates</h2></div>
            <hr/>
            <div className="row align-self-start">
                {
                    templates.map(data => (
                        <div key={data.id} className="col-4 col-sm-3">
                            <Template template={data}/>
                        </div>
                    ))
                }
            </div>
            <div className="b-example-divider"></div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">

                </ul>
                <p className="text-center text-muted">© 2022 : Created By Salitha Chathuranga</p>
            </footer>
        </div>
    );
}

export default Templates;
