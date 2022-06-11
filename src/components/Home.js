import React from 'react';
import WorkFlow from "../assets/workflow-management.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="app-container">
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={WorkFlow} alt="WorkFlow"/>
                    <h1 className="display-5 fw-bold">Hello!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Welcome to Dynamic Workflow Management System</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to={"/templates"}>
                                <button type="button" className="btn btn-dark btn-lg px-4 gap-3">BROWSE WORKFLOWS</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
                    <p className="text-center text-muted">© 2022 : Created By Salitha Chathuranga</p>
                </footer>
            </div>
        </div>
    );
}
export default Home;
