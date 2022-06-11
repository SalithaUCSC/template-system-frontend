import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {addCardToTemplate} from "../services/TemplateService";
import {showAlert} from "../services/AlertService";

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
    const [cardPosition, setCardPosition] = useState("0");
    const handleCardPosition = (e) => {
        setCardPosition(e.target.value);
    };
    const [cardPositionNo, setCardPositionNo] = useState("0");
    const handleCardPositionNo = (e) => {
        setCardPositionNo(e.target.value);
    };
    const isFormValid = () => {
        return (cardName !== '') &&  (cardName !== '') &&  (cardDuration !== '') &&  (cardDescription !== '')
    }
    const validateRequestWithCardIndex = (request) => {
        if (cardPosition === '0') {
            request['cardPosition'] = parseInt(cardPosition);
        } else if (cardPositionNo !== '0') {
            request['cardPosition'] = parseInt(cardPositionNo);
        } else if (cardPosition === '') {
            request['cardPosition'] = 0;
        }
    }
    const submitForm = (e) => {
        e.preventDefault();
        let request = {
            templateId: id,
            card: {
                name: cardName,
                description: cardDescription,
                timeDuration: cardDuration,
                role: cardRole,
                attributes: []
            }
        };
        validateRequestWithCardIndex(request);
        console.log(request);
        if (isFormValid()) {
            addCardToTemplate(request).then(res => {
                console.log(res);
                if (res.status === 200) {
                    showAlert('Success!', 'success', 'Card is saved to template.');
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
                        <label htmlFor="cardRole">Card Role</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="cardDescription" name={cardDescription} rows="5" onChange={handleCardDescription}></textarea>
                        <label htmlFor="cardDescription">Description</label>
                    </div>
                    <div className="form mb-3">
                        <label htmlFor="cardPosition" className="mb-3">Card Position</label>
                        <div>
                            <select name="cardPosition" id="cardPosition" onChange={handleCardPosition}>
                                <option value="" className="dropdown-item">Select Position</option>
                                <option value="0" className="dropdown-item">START</option>
                                <option value="END" className="dropdown-item">END</option>
                                <option value="INDEX" className="dropdown-item">GIVEN INDEX</option>
                            </select>
                        </div>
                    </div>
                    {
                        cardPosition === "INDEX" ?
                            <input type="number" className="form-control" id="cardPositionNo" name={cardPositionNo} placeholder="Index" onChange={handleCardPositionNo}/>
                        : ""
                    }
                        <br/><br/>
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
