import React from "react"
import AdminService from "../service/AdminService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ARegistation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddr] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    const saveAregistation = (e) => {
        e.preventDefault();
        const admin = { a_name: name, a_email: email, a_phno: phone, a_addr: address, a_pass: password };
        AdminService.createAdmin(admin)
            .then(() => {
                console.log(admin);
                navigate("/ListAdmin");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="container"><br></br><br></br>
            <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
                <div className="container my-4">
                    <div className="text-center">
                        <h2>Admin Registration</h2>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-lg-5">
                            <form onSubmit={(e) => saveAregistation(e)}>
                                <label for="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" id="name" className="form-control" placeholder="e.g. Mario"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                                <label for="email" className="form-label">
                                    Email address:
                                </label>
                                <input type="text" id="email" className="form-control" placeholder="e.g. mario@example.com"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                    <button type="submit" className="btn btn-outline-dark">
                                        Submit
                                    </button><br></br>
                                    <br></br>
                                    <span>Already registered? <a href="/login" >Login here</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ARegistation;