import axios from "axios";

const CLogin_url = "http://localhost:8010/api/login";

class CLoginService {

    cLoginValidation(LoginCust) {
        return axios.post(CLogin_url, LoginCust);
    }
}

export default new CLoginService()