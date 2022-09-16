import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
    headers: {
        'x-api-key': '3308355c-31de-483c-a1aa-43a48ae4b266',
    }
});

export const getFilteredFilms = ({type = 'TOP_AWAIT_FILMS', page = 1,}) => axiosInstance.get('/films/top', {
    params: {
        type,
        page,
    }
});