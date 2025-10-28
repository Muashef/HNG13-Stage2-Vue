import { createRouter, createWebHistory } from "vue-router"
import Landing from "../pages/Landing.vue"
import Login from "../pages/auth/Login.vue"
import Signup from "../pages/auth/Signup.vue"
import Dashboard from "../pages/Dashboard.vue"

const routes = [
  {
    path: "/",
    component: Landing,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    component: Signup,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("currentUser")

  if (to.meta.requiresAuth && !user) {
    next("/login")
  } else if ((to.path === "/login" || to.path === "/signup") && user) {
    next("/dashboard")
  } else {
    next()
  }
})

export default router
