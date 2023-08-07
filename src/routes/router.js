import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index';
import Other from '../pages/Other';
import Socket from '../pages/Socket';

const Login = () => import('../pages/Login');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login',
      },
    }, // alias: '/' чтобы компонент открывался на главной при загрузке
    {
      path: '/other',
      name: 'other',
      meta: {
        cantEnter: true,
        title: 'Other',
      },
      component: Other, // задаем внутри еще раз router-view для отображения детей
      // children: { // задаем разные дочерние страницы
      //   path: ':param?', // /: динамический параметр/название страницы
      //   component: OtherComponent, // /: компонент страницы
      //   param: true // включаем props, который передаем из главного и ловим в дочерних компонентах
      // },
    },
    {
      path: '/ws_messenger',
      component: Socket,
      meta: {
        title: 'Socket Messenger',
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
