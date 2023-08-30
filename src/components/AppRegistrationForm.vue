<template>
  <form
    novalidate
    class="card"
    @submit.prevent="onSubmit"
  >
    <h1>Зарегистрироваться</h1>
    <div :class="['form-control',{invalid: uError}]">
      <label for="username">Имя</label>
      <input
        type="text"
        id="username"
        v-model="username"
      >
      <small v-if="uError">{{uError}}</small>
    </div>
    <div :class="['form-control',{invalid: eError}]">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
      >
      <small v-if="eError">{{eError}}</small>
    </div>
    <div :class="['form-control',{invalid: pError}]">
      <label for="password">Пароль</label>
      <input
        type="password"
        autocomplete="on"
        id="password"
        v-model="password"
      >
      <small v-if="pError">{{pError}}</small>
    </div>
    <div :class="['form-control',{invalid: pdError}]">
      <label for="passwordRepeat">Повторите пароль</label>
      <input
        type="password"
        autocomplete="on"
        id="passwordRepeat"
        v-model="passwordRepeat"
      >
      <small v-if="pdError">{{pdError}}</small>
    </div>
    <button
      class="btn"
      @click.prevent="clickSubmitHandler"
    >Войти</button>
    <button
      class="btn primary"
      type="submit"
    >Зарегистрироваться</button>
  </form>
</template>
<script>
import { useRegForm } from "../js/composables/useRegForm";
export default {
  setup() {
    return { ...useRegForm() };
  },
};
</script>
<style lang="scss">
</style>