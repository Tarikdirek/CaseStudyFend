import axios from 'axios';
import tokenService from '../../services/tokenService';
import toastr from 'toastr';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response;
  },
  (error) => {
    if (error.response?.data === 'Bad credentials') {
      toastr.error('Invalid credentials provided.', 'Authentication Error');
    }else if(error.response.status === 400)
    {
      console.log(error)
      toastr.error(error.response.data, 'Error !!!');
    }else{
      toastr.error(error.message, 'Error !!!');
    }
    return error;
  }
);

export default axiosInstance;
