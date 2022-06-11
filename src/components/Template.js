import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TemplateLogo from "../assets/workflow.png";

const Template = ({template}) => {
    const [templateData, setTemplateData] = useState({});
    useEffect(() => {
        setTemplateData(template);
    }, [template]);
    return (
        <div className="card app-card">
                <img src={TemplateLogo} className="card-img-top" alt="template card"/>
                <div className="card-body">
                <h5 className="card-title">{templateData.title}</h5>
                <hr/>
                <p className="card-text">{templateData.description}</p>
                <Link to={"/templates/" + templateData.id}>
                    <button type="button" className="btn btn-dark">
                        <i className="fa-solid fa-eye"></i> View
                    </button>
                </Link>
            </div>
            <br/>
        </div>
    );
}

export default Template;
