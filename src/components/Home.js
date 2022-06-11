import React from 'react';
import WorkFlow from "../assets/workflow-management.png";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="app-container">
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={WorkFlow} alt="WorkFlow"/>
                    <h1 className="display-5 fw-bold">Hello!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Welcome to Dynamic Workflow Management System</p>
                        <div className="d-grid gap-2">
                            <div className="row align-items-center">
                                <i className="fa-solid fa-arrow-down" style={{fontSize: 40}}></i>
                            </div>
                            <br/>
                            <Link to={"/templates"}>
                                <button type="button" className="btn btn-dark btn-lg px-4 gap-3">BROWSE WORKFLOWS</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;
