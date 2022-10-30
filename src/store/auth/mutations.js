import { Cookies } from "quasar";

export const setLogin = (state, authInfo) => {
  localStorage.setItem("profileId", authInfo.profileId);
  localStorage.setItem("userName", authInfo.userName);
  localStorage.setItem("isAuthenticated", String(true));

  (state.profileId = authInfo.profileId),
    (state.userName = authInfo.userName),
    (state.isAuthenticated = true);
};

export const setLogout = (state) => {
  localStorage.clear();
  Cookies.remove("OscriptWeb.Identity.Application");

  (state.profileId = null),
    (state.userName = null),
    (state.isAuthenticated = false);
};
