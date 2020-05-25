import axios from 'axios';
const USER_API_BASE_URL = 'http://localhost:5000/user/login';

class AuthService {
    constructor() {
        this.authenticated = false;
    }
    componentDidMount() {
        localStorage.clear();
    }
    login(credentials) {
        return axios.post(USER_API_BASE_URL, credentials)
    }
    isAuthenticated() {
        const token = this.getToken()
        console.log(token);
        console.log(this.isTokenExpired(token));
        if (this.authenticated && !this.isTokenExpired(token)) {
            return true;
        }
        return false;
    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    setAuth() {
        if (localStorage.getItem(this.getToken())) {
            this.authenticated = true;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    getAuthHeader() {
        return { headers: { Authorization: 'Bearer ' + this.getToken() } };
    }

}
export default new AuthService;