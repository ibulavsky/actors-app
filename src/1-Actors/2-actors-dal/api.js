import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'https://swapi.co/api/'
    }
);

export const apiActors = {
    getActors(currentPage = null) {
        return axiosInstance.get(`people/?page=${currentPage}`,)
            .then(response => response.data)
    }
};
