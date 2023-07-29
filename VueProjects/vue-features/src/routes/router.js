import { createRouter, createWebHistory } from 'vue-router';
import Index from '../Pages/Index';
import Login from '../Pages/Login';
import Other from '../Pages/Other';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/login', component: Login }, // alias: '/' чтобы компонент открывался на главной при загрузке
    {
      path: '/Other',
      component: Other, // задаем внутри еще раз router-view для отображения детей
      // children: { // задаем разные дочерние страницы
      //   path: ':param?', // /: динамический параметр/название страницы
      //   component: OtherComponent, // /: компонент страницы
      //   param: true // включаем props, который передаем из главного и ловим в дочерних компонентах
      // },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
