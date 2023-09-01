<template>
  <div
    class="alert"
    :class="type"
  >
    <p class="alert-title">{{title}}</p>
    <p>{{text}}</p>
    <span
      @click="toggleAlert"
      class="alert-close"
    >&times;</span>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    title: String,
    type: String,
  },
  methods: {
    toggleAlert() {
      this.$emit("hide");
    },
  },
};
</script>
<style lang="scss">
</style>