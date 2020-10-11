import Vue from "vue";
import App from "./App.vue";
import store from "../index";
import router from "@/router/router.js";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
