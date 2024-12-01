import { createRouter, createWebHistory } from "vue-router";

export const routes = {
  HomePage: "app.homepage",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: routes.HomePage,
      component: () => import("../pages/homePage/homePage"),
    },
  ],
});

export default router;
