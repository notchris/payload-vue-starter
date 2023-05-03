import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const apiRoot = "http://localhost:3000/";

const app = createApp(App);
app.config.globalProperties.$apiRoot = apiRoot;

const pinia = createPinia();
app.use(pinia);
app.use(plugin, defaultConfig);
app.use(router);
app.mount("#app");

export { apiRoot };
