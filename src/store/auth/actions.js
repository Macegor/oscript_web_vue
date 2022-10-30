import { appApi } from "@/api";

export const Login = (context, payload) => {
  return appApi.post("/app/auth/login", payload).then((response) => {
    if (response.status == 200) {
      context.commit("setLogin", {
        profileId: response.data.id,
        userName: response.data.name,
      });
    }
  });
};

export const Logout = (context) => {
  context.commit("setLogout");
  appApi.get("/app/auth/logout");
};
