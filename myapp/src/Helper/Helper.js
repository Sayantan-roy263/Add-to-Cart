import axios from 'axios';

let adminUrl = 'https://fakestoreapi.com'

if(process.env === 'production'){
    let adminURL = 'https://fakestoreapi.com'
}

export const baseURL = adminUrl;

let axiosInstance = axios.create({baseURL, });

// axiosInstance.interceptors.request.use(
//     async function(config){
//         const token =
//         localStorage.getItem("token") || sessionStorage.getItem("token");
//         if(token !== null || token !== undefined){
//             config.headers["x-access-token"] = token;
//         }
//         return config;
//     },
//     function(err){
//         return Promise.reject
//     }
   
// );
export default axiosInstance;