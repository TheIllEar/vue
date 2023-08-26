<template>
  <div class="container">
    <div class="card form-control">
      <!-- $store.count -->
      <h2>Работа с Store - Vuex {{getCount}}</h2> 
      <div class="box">
        <input
          class="input"
          v-model.trim.number='newCount'
          @input="inputChandler"
          type="number"
        >
        <button
          @click="changeCount({type: 'increment'})"
          class="btn primary mt-10"
        >Увеличить</button>
        <button
          @click="changeCount({type: 'decriment'})"
          class="btn mt-10"
        >Уменьшить</button>
        <button
          @click="changeCount({type: 'set', value: newCount})"
          :disabled="!newCount"
          class="btn mt-10"
        >Задать</button>
        <button
          @click="changeCount({type: 'reset'})"
          :disabled="!getCount"
          class="btn danger mt-10"
        >Сброс</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Socket",
  data() {
    return {
      newCount: "",
    };
  },
  computed: {
    ...mapGetters("counter", ["getCount"]),
  },
  methods: {
    ...mapActions("counter", ["changeCount"]),
    inputChandler() {
      console.log(this.newCount);
    },
  },
};
</script>