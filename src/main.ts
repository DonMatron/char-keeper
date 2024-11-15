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

router.beforeEach((to, from, next) => {
  const locale = typeof to.params.locale == 'string' ? to.params.locale : 'en';

  const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'en',
    messages: {
      en,
      ua
    }
  });

  app.use(i18n);
  next();
});

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(createPinia());

app.mount('#app');
