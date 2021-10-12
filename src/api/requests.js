import Axios from "axios";

let url = "http://192.168.20.59:8080";

let user = localStorage.getItem("user") || "";
let parsedUser = {};
try {
    parsedUser = JSON.parse(user);
} catch (error) {}

let axios = Axios.create({
    baseURL: url,
});

axios.interceptors.request.use((e) => {
    if (!!parsedUser.token) {
        e.headers = {...e.headers, ["Token"]: parsedUser.token };
    }
    return e;
});

axios.interceptors.response.use((e) => e, (e) => {
    localStorage.clear();
    window.location = "/login";
    return e;
})

export let requests = {
    auth: {
        login: (credentials) => axios.post("/signin", credentials),
        register: (credentials) => axios.post("/signup", credentials),
    },
    products: {
        getRestaurants: () => axios.get("/restaurant"),
    },
};