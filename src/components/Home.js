import React, {useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
import Template from "./Template";

import {getTemplates} from "../services/TemplateService";

const Home = () => {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        getTemplates().then(res => setTemplates(res.data)).catch(err => console.log(err));
    })
    return (
        <div className="app-container">
            <div className="app-header"><h2>Dynamic Workflow Management System</h2></div>
            <hr/>
            <div className="container">
                <div className="row align-self-start">
                    {
                        templates.map(data => (
                            <div key={data.id} className="col-4 col-sm-3">
                                <Template template={data}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Home;
