<script setup>
import PreLoader from './components/PreLoader.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Hero from './components/Hero.vue'
import Posts from './components/Post.vue'
import MyFooter from './components/Footer.vue'
</script>

<template>
  <PreLoader />
  <Navbar />
  <Hero />
  <About />
  <Posts/>
  <MyFooter />
</template>

<style scoped></style>
