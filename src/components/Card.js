import {useEffect, useState} from "react";
import React from "react";

const Card = ({card}) => {
    const [cardData, setcardData] = useState({});
    useEffect(() => {
        setcardData(card);
    }, [card]);
    return (
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={{marginBottom: 20}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={"#panelsStayOpen-" + cardData.id}>
                        <button className="accordion-button" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#panelsStayOpen-" + cardData.id}
                            aria-expanded="true"
                            aria-controls={"panelsStayOpen-" + cardData.id}
                        >
                            {cardData.name}
                        </button>
                    </h2>
                    <div id={"panelsStayOpen-" + cardData.id} className="accordion-collapse collapse show"
                         aria-labelledby={"#panelsStayOpen-" + cardData.id}>
                        <div className="accordion-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b>ID: </b>{cardData.id}</li>
                                <li className="list-group-item"><b>Name: </b>{cardData.name}</li>
                                <li className="list-group-item"><b>Parent Card: </b>{cardData.parentId || "NULL"}</li>
                                <li className="list-group-item"><b>Description: </b>{cardData.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
