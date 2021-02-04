import Axios from "axios";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
    beforeEnter(to, from, next) {
      console.log("hello");
      Axios.get("/api/authenticated")
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.error(e);
          next({ name: "login" });
        });
    }
  },

  {
    path: "/",
    component: () => import("layouts/SignPageLayout.vue"),
    children: [
      {
        name: "login",
        path: "login",
        component: () => import("pages/Login.vue")
      },
      {
        name: "register",
        path: "register",
        component: () => import("pages/Register.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
