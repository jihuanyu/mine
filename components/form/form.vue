<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang='css' scoped>
.form {
  width: 100%;
  margin-top: 20px;
}
</style>