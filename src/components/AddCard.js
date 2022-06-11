import React from 'react';
import {useParams} from "react-router-dom";

const AddCard = () => {
    const { id } = useParams();
    return (
        <div className='app-container'>
            <div className="container">
                <h4>Add Card to Template: {id}</h4>
                <hr/>
                <form className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardName" placeholder="Name for Card"/>
                        <label htmlFor="cardName">Card Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardDuration" placeholder="Time Duration"/>
                        <label htmlFor="cardDuration">Time Duration</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="cardRole" placeholder="Role"/>
                        <label htmlFor="cardRole">Role</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="cardDescription" rows="5"></textarea>
                        <label htmlFor="cardDescription">Description</label>
                    </div>
                    <button className="w-10 btn btn-success" type="submit">SAVE</button>
                    <hr className="my-4"/>
                    <small className="text-muted">Fill the fields accordingly.</small>
                </form>
            </div>
        </div>
    );
}
export default AddCard;
