import tokenService from "./tokenService";
import axios from "axios";

class AuthService{
    authenticate = async (credentials:any) => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/login", credentials); 
            const token = response.data;
            tokenService.setToken(token.accessToken);
            tokenService.setRefreshToken(token.refreshToken)
            return token;
        } catch (error) {
            console.error("Authentication failed:", error);
            throw error;
        }
    }
}

export default new AuthService();