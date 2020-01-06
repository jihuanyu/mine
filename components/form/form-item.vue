<template>
  <div class="form-item">
    <label class="label" v-if="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss' scoped>
.form-item {
  display: flex;
  margin: 0 57px 20px;
}
.label {
  line-height: 70px;
  font-size: $normal-Size;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(121, 121, 121, 1);
}
</style>