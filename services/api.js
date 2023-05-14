import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

// AUTH
export const register = (data) => api.post("auth/register", data);
export const login = (data) => api.post("auth/login", data);
export const forgotPassword = (data) => api.post("auth/forgotpassword", data);
export const resetPassword = (data, code) => api.patch(`auth/resetpassword/${code}`, data);
export const checkUsername = (username) => api.get(`/auth/usernameavailable/${username}`);
export const verifyEmail = (code) => api.get(`/auth/verifyemail/${code}`);
export const getUserData = () => api.get("/users/me");

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
                    withCredentials: true,
                });
                return api.request(originalRequest);
            } catch (err) {
                console.log(err);
            }
        }
        throw error;
    }
);

export default api;