import axios from "axios";

const Customer_Base_URL = "http://localhost:8010/api/customer";

class CustomerService {

  getAllCustomer() {
    return axios.get(Customer_Base_URL);
  }

  createCustomer(customer) {
    return axios.post(Customer_Base_URL, customer);
  }

  getCustomerById(c_id) {
    return axios.get(Customer_Base_URL + "/" + c_id);
  }

  updateCustomer(c_id, customer) {
    return axios.put(Customer_Base_URL + "/" + c_id, customer);
  }

  deleteCustomer(c_id) {
    return axios.delete(Customer_Base_URL + "/" + c_id);
  }
}

export default new CustomerService();