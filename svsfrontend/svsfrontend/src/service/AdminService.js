import axios from "axios";
import { Component } from 'react';

const Admin_URL = "http://localhost:8010/api/admin";

class AdminService {

    getAdmin() {
        return axios.get(Admin_URL);
    }

    createAdmin(admin) {
        return axios.post(Admin_URL, admin);
    }

    getAdminById(a_id) {
        return axios.get(Admin_URL + "/" + a_id);
    }

    updateAdmin(a_id, admin) {
        return axios.put(Admin_URL + "/" + a_id, admin);
    }

    deleteAdmin(a_id) {
        return axios.delete(Admin_URL + "/" + a_id);
    }
}

export default new AdminService();
