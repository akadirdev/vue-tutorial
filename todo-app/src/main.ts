import { createApp } from "vue";
import App from "./App.vue";
import AppHeader from "./components/AppHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import MainHeader from "./components/MainHeader.vue";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("SearchBar", SearchBar);
app.component("MainHeader", MainHeader);
app.mount("#app");
