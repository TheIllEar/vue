import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index';
import Other from '../pages/Other';
import Vuex from '../pages/Vuex';
import store from '../store/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: 'Home',
        layout: 'main',
        auth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login'),
      meta: {
        title: 'Login',
        layout: 'auth',
        auth: false,
      },
    }, // alias: '/' чтобы компонент открывался на главной при загрузке
    {
      path: '/other',
      name: 'other',
      meta: {
        title: 'Other',
        layout: 'main',
        auth: true,
      },
      component: Other, // задаем внутри еще раз router-view для отображения детей
      // children: { // задаем разные дочерние страницы
      //   path: ':param?', // /: динамический параметр/название страницы
      //   component: OtherComponent, // /: компонент страницы
      //   param: true // включаем props, который передаем из главного и ловим в дочерних компонентах
      // },
    },
    {
      path: '/vuex',
      component: Vuex,
      meta: {
        title: 'Vuex',
        layout: 'main',
        auth: true,
      },
    },
    {
      path: '/ws_messenger',
      component: () => import('../pages/Socket'),
      meta: {
        title: 'Socket Messenger',
        layout: 'main',
        auth: true,
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters['auth/isAuth']) {
    // next(false);
    // next({ name: 'login' });
    next();
  } else if (requireAuth && !store.getters['auth/isAuth']) {
    next('/login?message=auth');
  } else if (!requireAuth && store.getters['auth/isAuth']) {
    next('/');
  } else {
    next();
  }
});

export default router;
