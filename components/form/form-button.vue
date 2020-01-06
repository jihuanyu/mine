<template>
  <button class="form-button" @click="submit">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: {
      default: ""
    },
    classis: {
      type: String
    }
  },
  methods: {
    submit(e) {
      this.$emit("click", e.target.value);
    }
  }
};
</script>

<style lang='scss' scoped>
.form-button {
  width: 647px;
  height: 76px;
  margin: 93px 0 0 52px;
  border: none;
  outline: none;
  border-radius: 100px;
}
.test {
  background: rgba(238, 238, 238, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: $normal-Size;
  color: rgba(169, 169, 169, 1);
}
.submit {
  background: linear-gradient(
    135deg,
    rgba(253, 88, 48, 1) 0%,
    rgba(254, 71, 35, 1) 100%
  );
  font-size: $normal-Size;
  font-family: PingFangSC-Regular, PingFang SC;
  color: rgba(255, 255, 255, 1);
}
</style>