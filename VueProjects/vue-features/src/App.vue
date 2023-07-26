<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      :type="type"
      title="Ойой"
      text="Скрой меня =)"
    />
    <div class="card flex">
      <p
        class="card-text"
        v-color:[colorType].hover="myColor"
      >Меняем этот цвет</p>
      <button
        class="btn primary"
        @click="toggleAlert(); changeColor();"
      >{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>

    <AppBlock />
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert";
import AppBlock from "./components/AppBlock";
import alertMixin from "./mixins/alertMixin";
import colorDirective from "./directives/colorDirective";

export default {
  data() {
    return {
      type: "primary",
      myColor: "black",
      colorType: "color",
    };
  },
  mixins: [alertMixin],
  directives: {color: colorDirective},
  methods: {
    changeColor() {
      this.myColor = this.alert ? "#42b983" : 'black';
    },
  },
  components: {
    AppAlert,
    AppBlock,
  },
};
</script>

