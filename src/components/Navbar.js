import React from 'react';
import {Link} from "react-router-dom";
import AppStatus from "./AppStatus";

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
                            <AppStatus/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
