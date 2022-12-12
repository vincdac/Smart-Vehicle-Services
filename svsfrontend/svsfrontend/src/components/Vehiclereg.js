import React, { useState } from "react";
import VehicleService from "../service/VehicleService";
import { useNavigate } from "react-router-dom";

const Vehiclereg = () => {
    const [v_name, setName] = useState("");
    const [v_number, setNumber] = useState("");
    const [v_colour, setColour] = useState("");
    const [v_regdate, setDate] = useState("");
    const [v_fueltype, setfuelType] = useState("");
    const [v_pickupaddr, setpickupAddr] = useState("");
    const [v_issue, setIssue] = useState("");
    const navigate = useNavigate();

    const vreg = (e) => {
        e.preventDefault();
        const vehicle = {
            v_name: v_name,
            v_number: v_number,
            v_colour: v_colour,
            v_regdate: v_regdate,
            v_fueltype: v_fueltype,
            v_pickupaddr: v_pickupaddr,
            v_issue: v_issue
        };

        VehicleService.createVehicle(vehicle)
            .then(() => {
                console.log(vehicle);
                navigate("/Vehiclelist")
            }).catch((err) => {
                console.error(err);
            });
    };
    return (
        <div className="container my-4"><br></br><br></br>
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="text-center">
                    <h2>Vechile Registration</h2>
                </div>
                <div className="row justify-content-center my-4">
                    <div className="col-lg-5">
                        <form onSubmit={(e) => vreg(e)}>
                            <label for="name" className="form-label">
                                Vechile Name
                            </label>
                            <input type="text" id="name" className="form-control" placeholder="e.g. Hyundai i10"
                                value={v_name} onChange={(e) => setName(e.target.value)} />
                            <label for="number" className="form-label">
                                Vechile Number
                            </label>
                            <input type="text" id="number" className="form-control" placeholder="e.g. MH15BZ2564"
                                value={v_number} onChange={(e) => setNumber(e.target.value)} />
                            <label for="color" className="form-label">
                                Color
                            </label>
                            <input type="text" id="color" className="form-control" placeholder="e.g. Red"
                                value={v_colour} onChange={(e) => setColour(e.target.value)} />
                            <label for="date" className="form-label">
                                Registation Date
                            </label>
                            <input type="date" id="date" className="form-control" placeholder="e.g. 23/03/1991"
                                value={v_regdate} onChange={(e) => setDate(e.target.value)} />
                            <label for="fuletype" className="form-label">
                                Fuel Type
                            </label>
                            <input type="text" id="fueltype" className="form-control" placeholder="e.g. Petrol/Disel"
                                value={v_fueltype} onChange={(e) => setfuelType(e.target.value)} />
                            <label for="address" className="form-label">
                                Pickup Address
                            </label>
                            <textarea id="address" className="form-control" placeholder="Enter your address"
                                value={v_pickupaddr} onChange={(e) => setpickupAddr(e.target.value)} />
                            <label for="issue" className="form-label">
                                Issue
                            </label>
                            <textarea id="issue" className="form-control" placeholder="Issues in car"
                                value={v_issue} onChange={(e) => setIssue(e.target.value)} />
                            <div className="mb-4 text-center my-2">
                                <button type="submit" className="btn btn-outline-dark">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehiclereg;
