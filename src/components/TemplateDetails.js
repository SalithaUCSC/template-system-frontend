import {useEffect, useState} from "react";
import {getTemplateById} from "../services/TemplateService";
import {Link, useParams} from "react-router-dom";
import React from "react";
import Card from "./Card";

const TemplateDetails = () => {
    const [template, setTemplate] = useState({});
    const { id } = useParams();
    const [cards, setCards] = useState([]);
    useEffect(() => {
        getTemplateById(id)
            .then(res => {
                setTemplate(res.data);
                setCards(res.data['cards'])
            })
            .catch(err => console.log(err));
    })
    return (
        <div className="app-details">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-6 col-sm-10">
                        <h3>{template.title ? template.title : "No Title"}</h3>
                    </div>
                    <div className="col-6 col-sm-2">
                        <div style={{marginLeft: -20, float: "right"}}>
                            <Link to={"/templates/" + template.id + "/addCard"}>
                                <button type="button" className="btn btn-dark">Add Card</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <br/>
                <ul className="list-group">
                    <li className="list-group-item"><b>ID: </b>{template.id}</li>
                    <li className="list-group-item"><b>Name: </b>{template.name}</li>
                    <li className="list-group-item" style={{textAlign: "justify"}}>
                        <b>Description:</b><br/>{template.description}
                    </li>
                </ul>
                <br/>
                <h5>Workflow Items</h5><br/>
                <div className="row align-self-start">
                    {
                        cards.length ? cards.map(data => (
                            <div key={data.id} className="col-6 col-sm-6">
                                <Card card={data}/>
                            </div>
                        ))
                        :
                        <div><br/>No Cards for this Template</div>
                    }
                </div>
                <Link to={"/"}>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: 30}}>Go back</button>
                </Link>
            </div>
        </div>
    );
}

export default TemplateDetails;
