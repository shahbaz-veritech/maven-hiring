import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "@iconify/vue";

createApp(App)
  .use(store)
  .use(router)
  .component("IconifyIcon", Icon)
  .mount("#app");
