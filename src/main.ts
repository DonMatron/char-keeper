import './main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json';
import ua from './locales/ua.json';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: {
    en,
    ua
  }
}))

app.use(createPinia());

app.mount('#app');
