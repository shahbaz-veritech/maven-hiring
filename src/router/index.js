import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-meena",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About" },
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
    meta: { title: "Services" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactUsView.vue"),
    meta: { title: "Contact Us" },
  },
  {
    path: "/:catchAll(.*)",
    name: "404-page-not-found",
    component: () => import("../views/Error404Page.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
