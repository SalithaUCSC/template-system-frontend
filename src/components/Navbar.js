import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>WORKFLOWS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to="/" className="nav-link">Home</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
