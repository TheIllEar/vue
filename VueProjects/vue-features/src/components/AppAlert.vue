<template>
  <div
    class="alert"
    :class="type"
  >
    <p class="alert-title">{{title}}</p>
    <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    title: String,
    type: String,
  },
};
</script>
<style lang="scss">
</style>