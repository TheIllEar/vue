import { createApp } from 'vue';
import App from '../App.vue';
import '../theme.css';
import i18n from '../plugins/i18n';
import router from '../routes/router';

const app = createApp(App);
const langs = {
  ru: {
    app: {
      title: 'Русский заголовок',
      changeLang: 'Переключить язык',
      changeColor: 'Меняем этот цвет',
      hide: 'Скрыть',
      show: 'Показать',
      message: 'сообщение',
    },
  },
  en: {
    app: {
      title: 'Eng title',
      changeLang: 'Change lang',
      changeColor: 'Change the color',
      hide: 'Hide',
      show: 'Show',
      message: 'message',
    },
  },
};
app.use(router);
app.use(i18n, langs);
app.mount('#app');
