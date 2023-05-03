import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import ResetPassword from "./pages/ResetPassword.vue";
import Account from "./pages/Account.vue";
import Logout from "./pages/Logout.vue";
import { useUserStore } from "./store";

const routes = [
  { path: "/", name: "Home", component: Home, alias: "/home" },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  { path: "/reset-password", name: "ResetPassword", component: ResetPassword },
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve(async (to, from, next) => {
  const store = useUserStore();
  await store.getUser();
  if (to.meta.requiresAuth && !store.user) {
    next({ name: "Login" });
  } else if (to.name === "Logout") {
    await store.logout();
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
