import React from "react";
import {Link} from "react-router-dom";

const AddTemplate = () => {
    return (
        <div className="app-details">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-6 col-sm-10">
                        add
                    </div>
                </div>
                <Link to={"/templates"}>
                    <button type="button" className="btn btn-secondary">Go back</button>
                </Link>
            </div>
        </div>
    );
}

export default AddTemplate;
