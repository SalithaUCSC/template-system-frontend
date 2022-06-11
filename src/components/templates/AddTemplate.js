import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {addTemplate} from "../../services/TemplateService";
import {showAlert} from "../../services/AlertService";

const AddTemplate = () => {
    const [templateName, setTemplateName] = useState("");
    const handleTemplateName = (e) => {
        setTemplateName(e.target.value);
    };
    const [templateTitle, setTemplateTitle] = useState("");
    const handleTemplateTitle= (e) => {
        setTemplateTitle(e.target.value);
    };
    const [templateDescription, setTemplateDescription] = useState("");
    const handleTemplateDescription = (e) => {
        setTemplateDescription(e.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        let request = {
            name: templateName,
            title: templateTitle,
            description: templateDescription,
            cards: []
        };
        console.log(request);
        if (isFormValid()) {
            addTemplate(request).then(res => {
                showAlert('Success!', 'success', 'Template is saved.');
            }).catch(err => {
                showAlert('Error!', 'error', err.message);
            })
        } else {
            showAlert('Error!', 'error', 'Please fill the details.');
        }
    };
    const isFormValid = () => {
        return (templateName !== '') && (templateTitle !== '') && (templateDescription !== '')
    }
    return (
        <div className="app-details">
            <div className="container">
                <div><h2>Add Templates</h2></div>
                <hr/>
                <div className="row align-items-end">
                    <div className="col-6 col-sm-10">
                        <form className="p-4 p-md-5 border rounded-3" onSubmit={submitForm}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="templateName" name={templateName}
                                       placeholder="Name for Card" onChange={handleTemplateName}/>
                                <label htmlFor="Template Name">Template Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="templateTitle" name={templateTitle}
                                       placeholder="Template Title" onChange={handleTemplateTitle}/>
                                <label htmlFor="templateTitle">Template Title</label>
                            </div>
                            <div className="form-floating mb-3">
                             <textarea className="form-control" id="templateDescription" name={templateDescription} rows="5"
                                  onChange={handleTemplateDescription}></textarea>
                                <label htmlFor="templateDescription">Template Description</label>
                            </div>
                            <button className="w-10 btn btn-success" type="submit">SAVE</button>
                        </form>
                    </div>
                </div>
                <br/>
                <Link to={"/templates"}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
            </div>
        </div>
    );
}

export default AddTemplate;
