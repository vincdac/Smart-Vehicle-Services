import React, { Component } from 'react'
import CustomerService from '../service/CustomerService'

class ListCustomers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customer: []
        }
    }

    componentDidMount() {
        CustomerService.getAllCustomer().then((response) => {
            this.setState({ customer: response.data });
        });
    }

    render() {
        return (
            <div className="container" ><br></br><br></br>
                <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
                    <h1 className="text-center">Customer List</h1><br></br>
                    <div className="container" >
                        <div className="row">
                            <table className="table table-striped table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer Name</th>
                                        <th> Email</th>
                                        <th> PhoneNo</th>
                                        <th> Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.customer.map(
                                            customer =>
                                                <tr key={customer.c_id}>
                                                    <td>{customer.c_id}</td>
                                                    <td>{customer.c_name}</td>
                                                    <td>{customer.c_email}</td>
                                                    <td>{customer.c_phno}</td>
                                                    <td>{customer.c_addr}</td>
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

export default ListCustomers