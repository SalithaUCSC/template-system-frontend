import {useEffect, useState} from "react";
import {getTemplates} from "../../services/TemplateService";
import Template from "./Template";
import React from "react";
import {showAlert} from "../../services/AlertService";
import {Link} from "react-router-dom";
import Footer from "../Footer";

const Templates = () => {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        getTemplates()
            .then(res => setTemplates(res.data))
            .catch(err => showAlert('Unable to Load!', 'error', err.message));
    })
    return (
        <div className="container app-container">
            <div className="row align-self-start">
                <div className="col-10 col-sm-10">
                    <div className="app-header"><h2>Dynamic Workflow Templates</h2></div>
                </div>
                <div className="col-2 col-sm-2">
                    <div style={{marginLeft: -20, float: "right"}}>
                        <Link to={"/templates/addTemplate"}>
                            <button type="button" className="btn btn-info">Add Template</button>
                        </Link>
                    </div>
                </div>
                <hr/>
                {
                    templates.length && templates.length > 0 ? templates.map(data => (
                        <div key={data.id} className="col-4 col-sm-3">
                            <Template template={data}/>
                        </div>
                    )) :
                        <div className="text-center"
                             style={{marginTop: 100, marginBottom: 50}}>There are no Templates saved in the system.
                        </div>
                }
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-sm-12">
                    <Link to={"/"}>
                        <button type="button" className="btn btn-secondary">Go back</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Templates;
