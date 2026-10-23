import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import "./style.css";
import App from "./App.vue";
import { sampleQuestions, topics } from "./data/sampleQuestions";
import { assertValidQuestionBank } from "./domain/questionValidation";

assertValidQuestionBank(sampleQuestions, topics);

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
