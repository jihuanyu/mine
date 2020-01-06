<template>
  <div class="form-input">
    <input :type="type" :value="value" @input="handlerInput" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "formItem",
  props: {
    type: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    handlerInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang='scss' scoped>
.form-input {
  flex: 1;
  input {
    height: 76px;
    outline: none;
    border-style: none;
    padding-left: 10px;
  }
}
</style>