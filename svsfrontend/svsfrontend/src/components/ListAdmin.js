import React, { Component } from 'react'
import AdminService from '../service/AdminService'
class ListAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            admin: []
        }
    }

    componentDidMount() {
        AdminService.getAdmin().then((res) => {
            this.setState({ admin: res.data });
        });
    }

    render() {
        return (
            <div className="container" ><br></br><br></br>
                <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
                    <h1 className="text-center">Admin List</h1><br></br>
                    <div className="container" >
                        <div className="row">
                            <table className="table table-striped table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Admin Name</th>
                                        <th>Admin Email</th>
                                        <th>Admin PhoneNo</th>
                                        <th>Admin Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.admin.map(
                                            admin =>
                                                <tr key={admin.a_id}>
                                                    <td>{admin.a_id}</td>
                                                    <td>{admin.a_name}</td>
                                                    <td>{admin.a_email}</td>
                                                    <td>{admin.a_phno}</td>
                                                    <td>{admin.a_addr}</td>
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

export default ListAdmin