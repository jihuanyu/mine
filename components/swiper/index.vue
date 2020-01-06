<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(pic,index) in list" :key="index">
        <img :src="pic.pic_url" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Swiper",
  props: {
    list: {
      type: Array
    }
  },
  mounted() {
    setTimeout(() => {
      new Swiper(".swiper-container", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      });
    }, 100);
  }
};
</script>

<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  height: 154px;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>