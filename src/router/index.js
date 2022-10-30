import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.auth.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.state.auth.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
  },
  {
    path: "/",
    name: "index",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "indexMain",
        component: () => import("../views/indexPage.vue"),
      },
    ],
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/page",
    name: "page",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "indexPage",
        component: () => import("../views/pagePage.vue"),
      },
    ],
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../layouts/CleanLayout.vue"),
    children: [
      {
        path: "",
        name: "indexLogin",
        component: () => import("../views/shared/loginPage.vue"),
      },
    ],
    beforeEnter: ifNotAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
