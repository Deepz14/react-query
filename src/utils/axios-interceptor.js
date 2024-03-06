import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8000"
});

export const request = ({...options}) => {
    let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    client.defaults.headers.common.Authorization = `Bearer ${token}`;

    const onSuccess = (response) => response;
    const onError = (error) => {
        // optionally catch errors and add additional logging here..
        return error;
    };

    return client(options).then(onSuccess).catch(onError);
}