export default {
  install(app, opts) {
    let currentLang = 'ru';

    const changeLanguage = (lang) => {
      currentLang = lang;
    };
    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, curr) => {
        return words[curr] || 'Something Wrong';
      }, opts[currentLang]);
    };

    app.provide('changeLang', changeLanguage);
  },
};
