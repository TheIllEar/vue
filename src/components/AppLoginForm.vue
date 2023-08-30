<template>
  <form
    novalidate
    class="card"
    @submit.prevent="onSubmit"
  >
    <h1>Войти в систему</h1>
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
    <button
      class="btn primary"
      type="submit"
    >Войти</button>
    <button
      class="btn"
      @click.prevent="clickSubmitHandler"
    >Зарегистрироваться</button>
  </form>
</template>
<script>
import { useLoginForm } from "../js/composables/useLoginForm";
export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>
<style lang="scss">
</style>