import { createApp } from "vue";
import App from "./App.vue";
import vImg from "./components/vImg.vue";
import "./assets/main.css";

const app = createApp(App);
// 全域 component 的用法
app.component("vImg", vImg);
app.mount("#app");
