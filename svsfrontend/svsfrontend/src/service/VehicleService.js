import axios from "axios";

const Vehicle_Base_URL = "http://localhost:8010/api/vehicle";

class VehicleService {

    createVehicle(vehicle) {
        return axios.post(Vehicle_Base_URL, vehicle)
    }

    getallVehicles() {
        return axios.get(Vehicle_Base_URL)
    }

    getVehicleById(v_id) {
        return axios.get(Vehicle_Base_URL + "/" + v_id);
    }

    updateVehicle(v_id, vehicle) {
        return axios.put(Vehicle_Base_URL + "/" + v_id, vehicle);
    }

    deleteVehicle(v_id) {
        return axios.delete(Vehicle_Base_URL + "/" + v_id);
    }
}

export default new VehicleService()