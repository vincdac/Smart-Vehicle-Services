import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employee: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        return (
            <div className="container" ><br></br><br></br>
                <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
                    <h1 className="text-center">Employee List</h1><br></br>
                    <div className="container" >
                        <div className="row">
                            <table className="table table-striped table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Employee Email</th>
                                        <th>Employee PhoneNo</th>
                                        <th>Employee Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employee.map(
                                            employee =>
                                                <tr key={employee.emp_Id}>
                                                    <td>{employee.emp_Name}</td>
                                                    <td>{employee.emp_EmailId}</td>
                                                    <td>{employee.emp_PhoneNo}</td>
                                                    <td>{employee.emp_Address}</td>
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

export default ListEmployeeComponent