import axios from "axios";

const Employee_Base_URL = "http://localhost:8010/api/employees";

class EmployeeService {

    getEmployee() {
        return axios.get(Employee_Base_URL)
    }

    createEmployee(employee) {
        return axios.post(Employee_Base_URL, employee);
    }

    getEmployeeById(e_id) {
        return axios.get(Employee_Base_URL + "/" + e_id);
    }

    updateEmployee(e_id, employee) {
        return axios.put(Employee_Base_URL + "/" + e_id, employee);
    }

    deleteEmployee(e_id) {
        return axios.delete(Employee_Base_URL + "/" + e_id);
    }
}

export default new EmployeeService();