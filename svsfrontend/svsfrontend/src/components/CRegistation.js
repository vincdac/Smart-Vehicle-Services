import CustomerService from "../service/CustomerService";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CRegistation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddr] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    const saveregistation = (e) => {
        e.preventDefault();
        const customer = { c_name: name, c_email: email, c_phno: phone, c_addr: address, c_pass: password };
        CustomerService.createCustomer(customer)
            .then(() => {
                console.log(customer);
                navigate("/Login");
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="container"><br></br><br></br>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container my-4">
                    <div className="text-center">
                        <h2>Registation</h2>
                        <p className="lead">Register with us and get great offers..</p>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-lg-5">
                            <form onSubmit={(e) => saveregistation(e)}>
                                <label for="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" id="name" className="form-control" placeholder="e.g. Mario" name="name"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                                <label for="email" className="form-label">
                                    Email id
                                </label>
                                <input type="text" id="email" className="form-control" placeholder="e.g. mario@example.com"
                                    name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label for="phone" className="form-label">
                                    Contact Number
                                </label>
                                <input type="tel" id="phone" name="phone" className="form-control" placeholder="012-345-6789"
                                    pattern="[0-9]{10}" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label for="address" className="form-label">
                                    Address
                                </label>
                                <textarea id="address" className="form-control" placeholder="Enter your address"
                                    name="address" value={address} onChange={(e) => setAddr(e.target.value)} />
                                <div>
                                    <label for="pass" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" id="pass" name="password" className="form-control" minlength="8"
                                        required value={password} onChange={(e) => setPass(e.target.value)} />
                                </div><br></br>
                                <div className="mb-4 text-center my-2">
                                    <button type="submit" className="btn btn-outline-dark" value="submit">
                                        Submit
                                    </button><br></br>
                                </div>
                            </form>
                            <div className="text-center">
                                <span>Vehicle Registation<Link to={"/Vehiclereg"}>Register</Link></span><br></br>
                                <span>Already registered?<Link to={"/Login"}>Login</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRegistation;



