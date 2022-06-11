import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="app-container">
            <div className="app-header"><h2>Dynamic Template Management System</h2></div>
            <Link to="/templates">
                <button type="button" className="btn btn-dark">
                    Click Me!
                </button>
            </Link>
        </div>
    );
}
export default Home;
