import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {addCardToTemplate} from "../services/TemplateService";
import {showAlert} from "../services/AlertService";
import template from "./Template";

const AddCard = () => {
    const { id } = useParams();
    const [cardName, setCardName] = useState("");
    const handleCardName = (e) => {
        setCardName(e.target.value);
    };
    const [cardDuration, setCardDuration] = useState("");
    const handleCardDuration = (e) => {
        setCardDuration(e.target.value);
    };
    const [cardRole, setCardRole] = useState("");
    const handleCardRole = (e) => {
        setCardRole(e.target.value);
    };
    const [cardDescription, setCardDescription] = useState("");
    const handleCardDescription = (e) => {
        setCardDescription(e.target.value);
    };
    const isFormValid = () => {
        return (cardName !== '') &&  (cardName !== '') &&  (cardDuration !== '') &&  (cardDescription !== '')
    }
    const clearForm = () => {
        setCardName('');
        setCardDuration('');
        setCardRole('');
        setCardDescription('');
    }
    const submitForm = (e) => {
        e.preventDefault();
        let request = {
            templateId: id,
            cardPosition: 0,
            card: {
                name: cardName,
                description: cardDescription,
                timeDuration: cardDuration,
                role: cardRole,
                attributes: []
            }
        }
        console.log(request);
        if (isFormValid()) {
            clearForm();
            addCardToTemplate(request).then(res => {
                console.log(res);
                if (res.status === 200) {
                    showAlert('Success!', 'success', 'Card is saved to template.');
                    clearForm();
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            showAlert('Error!', 'error', 'Please fill the details.');
        }
    };
    return (
        <div className='app-container'>
            <div className="container">
                <h4>Add Card to Template: {id}</h4>
                <hr/>
                <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={submitForm}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardName" name={cardName} placeholder="Name for Card" onChange={handleCardName}/>
                        <label htmlFor="cardName">Card Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardDuration" name={cardDuration} placeholder="Time Duration" onChange={handleCardDuration}/>
                        <label htmlFor="cardDuration">Time Duration</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardRole" name={cardRole} placeholder="Role" onChange={handleCardRole}/>
                        <label htmlFor="cardRole">Role</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="cardDescription" name={cardDescription} rows="5" onChange={handleCardDescription}></textarea>
                        <label htmlFor="cardDescription">Description</label>
                    </div>
                    <button className="w-10 btn btn-success" type="submit">SAVE</button>
                    <hr className="my-4"/>
                    <small className="text-muted">Fill the fields accordingly.</small>
                </form>
                <Link to={"/templates/" + id}>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: 30}}>Go back</button>
                </Link>
            </div>
        </div>
    );
}
export default AddCard;
