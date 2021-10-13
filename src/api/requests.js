import Axios from "axios";

export let url = "http://192.168.101.209:8080";

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
    e.headers = { ...e.headers, ["Token"]: parsedUser.token };
  }
  return e;
});

axios.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response && e.response.status === 401) {
      localStorage.clear();
      window.location = "/login";
    }
    return e;
  }
);

export let requests = {
  auth: {
    login: (credentials) => axios.post("/signin", credentials),
    register: (credentials) => axios.post("/signup", credentials),
  },
  restaurants: {
    getRestaurants: () => axios.get("/restaurant"),
    createRestaurant: (credentials) => axios.past("/restaurant", credentials),
  },
  file: {
    upload: (data) => axios.post("/upload", data),
  },
};
