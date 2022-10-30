import axios from "axios";
import store from "@/store";
import router from "@/router";

const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const appApi = axios.create(defaultConfig);

appApi.interceptors.response.use(
  function (response) {
    if (response.request.responseURL.indexOf("login?ReturnUrl") > 0) {
      store.dispatch("auth/Logout");
      router.push("/login");
    }
    return response;
  },
  function (error) {
    if (error.request.status === 401 || error.request.status === 403) {
      store.dispatch("auth/Logout");
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export { appApi };
