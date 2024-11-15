import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ locale: route.params.locale })
    },
    // Fallback route
    {
      path: '/:pathMatch(.*)*',
      redirect: () => '/en/',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const supportedLocales = ['en', 'ua'];
  const locale = to.params.locale;

  if (typeof locale !== 'string' || !supportedLocales.includes(locale)) {
    return next('/en/');
  }

  next();
});

export default router
