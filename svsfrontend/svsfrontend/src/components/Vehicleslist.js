import React, { Component } from 'react'
import VehicleService from '../service/VehicleService';

class Vehicleslist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vehicle: []
        }
    }

    componentDidMount() {
        VehicleService.getallVehicles().then((response) => {
            this.setState({ vehicle: response.data });
        });
    }

    render() {
        return (
            <div className="container" ><br></br><br></br>
                <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
                    <h1 className="text-center">Vehicle List</h1><br></br>
                    <div className="container" >
                        <div className="row">
                            <table className="table table-striped table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Vehicle Name</th>
                                        <th> Colour</th>
                                        <th> Number</th>
                                        <th> Reg Date</th>
                                        <th> Fule Type</th>
                                        <th> Issues</th>
                                        <th> Pickup Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.vehicle.map(
                                            vehicle =>
                                                <tr key={vehicle.v_id}>
                                                    <td>{vehicle.v_id}</td>
                                                    <td>{vehicle.v_name}</td>
                                                    <td>{vehicle.v_colour}</td>
                                                    <td>{vehicle.v_number}</td>
                                                    <td>{vehicle.v_regdate}</td>
                                                    <td>{vehicle.v_fuletype}</td>
                                                    <td>{vehicle.v_issue}</td>
                                                    <td>{vehicle.v_pickupaddr}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vehicleslist