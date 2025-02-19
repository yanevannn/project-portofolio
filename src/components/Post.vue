<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';

const posts = ref([
  {
    date: 'Januari 15, 2025',
    category: 'PHP, Laravel',
    title: 'Tutorial on Laravel 11',
    img: 'https://www.petanikode.com/img/cover/laravel-11.png',
  },
  {
    date: 'Januari 25, 2025',
    category: 'CSS, Tailwind',
    title: 'Tailwind CSS Tutorial',
    img: 'https://www.petanikode.com/img/cover/tailwind.png',
  },
  {
    date: 'February 02, 2025',
    category: 'DevOps, Docker',
    title: 'Tutorial on Docker',
    img: 'https://www.petanikode.com/img/cover/docker-install.png',
  }
]);

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section id="post" class="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6">
      <div class="text-left mb-12" data-aos="fade-right">
        <span class="text-xl font-semibold  font-poppins text-gray-600">DevScribe</span>
        <h3 class="text-3xl font-bold font-poppins text-gray-900 leading-tight w-full sm:w-1/2">Discover My Latest Coding Notes and Experiences</h3>
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="(post, index) in posts" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up" :data-aos-delay="index * 200">
          <img :src="post.img" alt="news image" class="w-full h-60 object-cover" />
          <div class="p-6">
            <p class="text-sm text-gray-500">{{ post.date }} <span class="text-blue-500">{{ post.category }}</span></p>
            <h3 class="text-xl font-semibold mt-2">{{ post.title }}</h3>
            <button class="mt-4 text-blue-600 hover:underline justify-end">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Tambahan untuk efek AOS jika diperlukan */
</style>
