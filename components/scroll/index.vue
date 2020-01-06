<template>
  <div :ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      isFixed: false
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    wrapper: {
      type: String,
      default: "wrapper"
    }
  },
  created() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init();
      }, 20);
    });
  },
  watch: {
    data() {
      setTimeout(() => {
        this.init();
      }, 20);
    }
  },
  methods: {
    init() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.Myscroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        scrollX: true,
        probeType: this.probeType,
        click: this.click
      });
      this.refresh();
      if (this.$router.history.current.path == "/home") {
        this.Myscroll.on("scroll", pos => {
          this.scrollY = Math.abs(Math.round(pos.y));
          let offsetTop = document.querySelector("#fixedHeaderRoot").offsetTop;
          if (this.scrollY > offsetTop) {
            this.isFixed = true;
            document.querySelector("#fixedHeaderRoot").classList.add("isFixed");
          } else {
            this.isFixed = false;
            document
              .querySelector("#fixedHeaderRoot")
              .classList.remove("isFixed");
          }
        });
      }
    },
    enable() {
      this.Myscroll && this.Myscroll.enable();
    },
    disable() {
      this.Myscroll && this.Myscroll.disable();
    },
    refresh() {
      this.Myscroll && this.Myscroll.refresh();
    }
  }
};
</script>

<style lang='scss'>
</style>