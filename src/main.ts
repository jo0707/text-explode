import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "virtual:windi.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/base16/dracula.css";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const app = createApp(App);

app.use(createPinia());
app.use(hljsVuePlugin);

app.mount("#app");
