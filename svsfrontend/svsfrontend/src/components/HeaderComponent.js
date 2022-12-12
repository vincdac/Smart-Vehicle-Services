import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className='container-xl'>
                            <Link className="navbar-brand" to="/"> </Link>
                            <Link className="navbar-brand" to="/">Smart Vehicle Services</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span className="navbar-toggler-icon"></span> */}
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">Product and Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/vehiclereg">Vechile Registration</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/login" >Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/admin" >Admin</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/registration" >Registration</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/ListEmployeeComponent" >Customer's List</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/ListEmployee" >Employee's List</Link>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;