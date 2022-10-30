export default function () {
  return {
    profileId: localStorage.getItem("profileId") || null,
    userName: localStorage.getItem("userName") || null,
    isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")) || false,
  };
}
