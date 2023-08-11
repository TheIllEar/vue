import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index';
import Other from '../pages/Other';
import Vuex from '../pages/Vuex';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: 'Home',
        layout: 'main'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login'),
      meta: {
        title: 'Login',
        layout: 'auth'
      },
    }, // alias: '/' чтобы компонент открывался на главной при загрузке
    {
      path: '/other',
      name: 'other',
      meta: {
        cantEnter: true,
        title: 'Other',
        layout: 'main'
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
        layout: 'main'
      },
    },
    {
      path: '/ws_messenger',
      component: () => import('../pages/Socket'),
      meta: {
        title: 'Socket Messenger',
        layout: 'main'
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    // next(false);
    // next({ name: 'login' });
    // @todo mini-registration with vuex or pinia
    document.title = 'Login';
    next('/login');
  } else {
    document.title = to.meta.title;
    next();
  }
});

export default router;
