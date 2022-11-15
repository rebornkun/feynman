import axios from "axios";


const baseUrl = "http://localhost:5000/api/v1/feynman"
class FeynmanDataService {
    registerUser(data){
        return axios.post(`${baseUrl}/register`, data);
    }

    loginUser(data){
        return axios.post(`${baseUrl}/login`, data);
    }

    get(id){
        return axios.get(`${baseUrl}/user/${id}`)
    }

    createTopic(data) {
        return axios.post(`${baseUrl}/topic`, data);
    }

    updateTopic(data) {
        return axios.put(`${baseUrl}/topic`, data);
    }

    deleteTopic(id) {
        return axios.delete(`${baseUrl}/topic?id=${id}`);
    }

}

export default new FeynmanDataService();