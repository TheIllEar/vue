import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useRegForm = () => {
  const { handleSubmit, isSubmitting } = useForm();
  const store = useStore();
  const router = useRouter();

  // Username
  const { value: username, errorMessage: uError, handleBlur: uBlur } = useField('name', yup.string().trim().required('Пожалуйста введите имя'));

  // Email
  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Пожалуйста введите email')
      .email('Введите корректный email')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Введите корректный email')
  );

  // Password
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password', yup.string().trim().required('Пожалуйста введите пароль').min(6, 'Длина пароля должна быть минимум 6 символов'));

  // Password Repeat
  const {
    value: passwordRepeat,
    errorMessage: pdError,
    handleBlur: pdBlur,
  } = useField('field', (value) => {
    if (value === password.value) {
      return true;
    } else {
      return 'Пароли должны совпадать';
    }
  });

  const clickSubmitHandler = (e) => {
    store.commit('auth/changeForm');
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      store.commit('setLoading');
      await store.dispatch('auth/registration', values);
      router.push('/');
    } catch (e) {
    } finally {
      store.commit('clearLoading');
    }
  });
  return {
    username,
    email,
    password,
    passwordRepeat,
    uError,
    eError,
    pError,
    pdError,
    uBlur,
    eBlur,
    pBlur,
    pdBlur,
    onSubmit,
    clickSubmitHandler,
    isSubmitting,
  };
};
