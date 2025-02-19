<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { preLoaderAnim } from "@/assets/js/animation";

onMounted(() => {
  preLoaderAnim();
});
</script>

<template>
  <div class="preloader bg-gray-800">
    <div class="texts-container drop-shadow-[0_0_10px_white]">
      <span>Developer,</span>
      <span>Coffe,</span>
      <span>Codes.</span>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  height: 100vh;
  width: 100%;
  /* background: #000; */
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 55;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.texts-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 280px;
  font-size: 20px;
  font-weight: 800;
  overflow: hidden;
  color: #fff;
}
</style>
