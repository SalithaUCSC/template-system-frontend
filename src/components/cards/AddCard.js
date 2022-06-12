import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {addCardToTemplate} from "../../services/TemplateService";
import {showAlert} from "../../services/AlertService";
import {getTimeDuration, validateDates} from "../../services/DateService";

const AddCard = () => {
    const {id} = useParams();
    const [inputFields, setInputFields] = useState([]);
    const [cardName, setCardName] = useState("");
    const handleCardName = (e) => {
        setCardName(e.target.value);
    };
    const [cardStartDate, setCardStartDate] = useState("");
    const handleCardStartDate = (e) => {
        setCardStartDate(e.target.value);
    };
    const [cardEndDate, setCardEndDate] = useState("");
    const handleCardEndDate = (e) => {
        setCardEndDate(e.target.value);
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
    const handleAttributeChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = (e) => {
        e.preventDefault();
        let newAttribute = { key: "", value: "" };
        setInputFields([...inputFields, newAttribute]);
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }
    const isFormValid = () => {
        return (cardName !== '') && (cardName !== '') && (cardStartDate !== '')
            && (cardEndDate !== '') && (cardDescription !== '')
    }
    const validateRequestWithCardIndex = (request) => {
        if (cardPosition === "0" && cardPositionNo === "0") {
            request['cardPosition'] = 0;
        }
        if (cardPosition === "INDEX") {
            request['cardPosition'] = parseInt(cardPositionNo);
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        let request = {
            templateId: id,
            card: {
                name: cardName,
                description: cardDescription,
                timeDuration: getTimeDuration(cardStartDate, cardEndDate),
                role: cardRole,
                attributes: inputFields.length > 0 ? inputFields : []
            }
        };
        validateRequestWithCardIndex(request);
        validateDates(cardStartDate, cardEndDate);
        if (isFormValid()) {
            addCardToTemplate(request).then(res => {
                if (res.status === 200) {
                    showAlert('Success!', 'success', 'Card is saved to template.');
                }
            }).catch(err => {
                showAlert('Error!', 'error', err.message);
            })
        } else {
            showAlert('Error!', 'error', 'Please fill the details.');
        }
    };
    return (
        <div className='app-container' style={{marginBottom: 100}}>
            <div className="container">
                <h4>Add Card to Template: {id}</h4>
                <hr/>
                <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={submitForm}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardName" name={cardName}
                               placeholder="Name for Card" onChange={handleCardName}/>
                        <label htmlFor="cardName">Card Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="cardStartDate" name={cardStartDate}
                               placeholder="Start Date" onChange={handleCardStartDate}/>
                        <label htmlFor="cardDuration">Start Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="cardEndDate" name={cardEndDate}
                               placeholder="End Date" onChange={handleCardEndDate}/>
                        <label htmlFor="cardDuration">End Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardRole" name={cardRole} placeholder="Role"
                               onChange={handleCardRole}/>
                        <label htmlFor="cardRole">Card Role</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="cardDescription" name={cardDescription} rows="5"
                                  onChange={handleCardDescription}></textarea>
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
                            <div className="form mb-3">
                                <input type="number" min="0" className="form-control" id="cardPositionNo" name={cardPositionNo}
                                   placeholder="Index" onChange={handleCardPositionNo}/>
                            </div>
                            : ""
                    }
                    <br/>
                    <div className="form mb-3">
                        <label className="mb-3">Card Attributes</label>
                        {inputFields.map((input, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        name="key"
                                        placeholder="Attribute Key"
                                        value={input.name}
                                        onChange={event => handleAttributeChange(index, event)}
                                    />
                                    <input
                                        name="value"
                                        placeholder="Attribute Value"
                                        value={input.name}
                                        onChange={event => handleAttributeChange(index, event)}
                                    />
                                    <button className="btn btn-danger btn-sm" style={{marginLeft: 10}}
                                            onClick={() => removeFields(index)}>
                                        <i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            )
                        })}
                        <br/>
                        <button className="btn btn-secondary" onClick={addFields}>
                            <i className="fa-solid fa-plus"></i> Add Attributes</button>
                    </div>
                    <br/><br/>
                    <button className="w-10 btn btn-success" type="submit">SAVE</button>
                    <hr className="my-4"/>
                    <small className="text-muted">Fill the fields accordingly.</small>
                </form>
                <Link to={"/templates/" + id}>
                    <button type="button" className="btn btn-secondary" style={{marginTop: 30}}>Go back</button>
                </Link>
            </div>
        </div>
    );
}
export default AddCard;
