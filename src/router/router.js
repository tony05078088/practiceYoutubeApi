import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePages.vue";
import Player from "@/components/Player.vue";
import Favorite from "@/components/Portfolio/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { title: "HomePage" }
  },
  {
    path: "/player/:videoId",
    name: "Player",
    component: Player,
    meta: { title : "Player"}
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
    meta: { title: "Favorite" }
},
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})
// set title for page
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title
        next()
})

export default router