import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import NotFound from "@/views/NotFound.vue";

export default [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "*",
    component: NotFound,
  },
];
