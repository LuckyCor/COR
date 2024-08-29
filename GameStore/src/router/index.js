import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from "@/components/Login.vue"//导入组件
// import Home from "@/components/Home.vue"
// import Index from "@/components/Index.vue"
// import Main from "@/components/Main.vue"
// import UserList from "@/components/yuanP/UserList.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    // component:'Login.vue',
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/index",
    name: "index",
    // component:'Index.vue',
    component: () => import("../components/Index.vue"),
  },
  {
    path: "/home",
    name: "home/main",
    // component:'Home.vue',
    component: () => import("../components/Home.vue"),
    children: [
      {
        //首页
        path: "/main",
        name: "main",
        // component:'Main.vue',
        component: () => import("../components/Main.vue")
      },
     
      //用户列表
      {
        path: "/userList",
        name: "userList",
        // component:'UserList.vue',
        component: () => import("../components/yuanP/UserList.vue")
      },
      {
        path: "/roleList",
        name: "roleList",
        // component:'RoleList.vue',
        component: () => import("../components/yuanP/RoleList.vue")
      },

      {
        path: "/userList1",
        name: "userList1",
        // component:'UserList.vue',
        component: () => import("../components/nongP/UserList1.vue")
      },
      {
        path: "/roleList1",
        name: "roleList1",
        // component:'RoleList.vue',
        component: () => import("../components/nongP/RoleList1.vue")
      },

      {
        path: "/userList2",
        name: "userList2",
        // component:'UserList.vue',
        component: () => import("../components/huoP/UserList2.vue")
      },
      {
        path: "/roleList2",
        name: "roleList2",
        // component:'RoleList.vue',
        component: () => import("../components/huoP/RoleList2.vue")
      },

      {
        path: "/userList3",
        name: "userList3",
        // component:'UserList.vue',
        component: () => import("../components/shaP/UserList3.vue")
      },
      {
        path: "/roleList3",
        name: "roleList3",
        // component:'RoleList.vue',
        component: () => import("../components/shaP/RoleList3.vue")
      },
    ],
  },
];
const router = new VueRouter({
  routes
});

export default router
