import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useLoginForm = () => {
  const { handleSubmit, isSubmitting } = useForm();
  const store = useStore();
  const router = useRouter();

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

  const clickSubmitHandler = (e) => {
    store.commit('auth/changeForm');
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      store.commit('setLoading');
      await store.dispatch('auth/login', values);
      router.push('/');
    } catch (e) {
    } finally {
      store.commit('clearLoading');
    }
  });
  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    clickSubmitHandler,
    isSubmitting,
  };
};
