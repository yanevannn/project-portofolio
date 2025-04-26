<script setup>
import { ref, onMounted } from 'vue';
import projectDesabukian from '@/assets/img/project-db.png';
import projectSita from '@/assets/img/project-sita.png';
import projectUd from '@/assets/img/project-ud.png';
import AOS from 'aos';

const posts = ref([
  {
    date: '2024',
    stack: ["Laravel", "Bootstrap", "MySQL",],
    title: 'Sistem Informasi Tata Kelola UKM PROGRESS',
    repository: 'Public',
    repoURL: "https://github.com/yanevannn/project-sistem-tatakelola-progress",
    img: projectSita,
  },
  {
    date: '2024',
    stack: ["Laravel", "Tailwind", "Preline UI", "MySQL",],
    title: 'Company Profile Desa Bukian',
    repository: 'Private',
    img: projectDesabukian,
  },
  {
    date: '2025',
    stack: ["Laravel", "Bootstrap", "Tailwind", "Preline UI", "PostgreeSQL",],
    title: 'Company Profile UD Bawa Motor',
    repository: 'Private',
    img: projectUd,
  }
]);

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section id="project" class="py-16 px-6 bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="container mx-auto max-w-7xl">
      <div class="text-left mb-12" data-aos="fade-right">
        <span class="text-xl font-semibold  font-poppins text-gray-600">myProject</span>
        <h3 class="text-3xl font-bold font-poppins text-gray-900 leading-tight w-full sm:w-1/2">Discover My Latest
          Coding Project and Experiences</h3>
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="(post, index) in posts" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up" :data-aos-delay="index * 200">
          <img :src="post.img" alt="news image" class="w-full h-60 object-cover" />
          <div class="p-6">
            <p class="text-sm text-gray-500">{{ post.date }}</p>
            <h3 class="text-xl font-semibold mt-2">{{ post.title }}</h3>
            <p class="font-semibold text-sm my-1 inline-flex items-center gap-1 text-gray-600">
              <span v-if="post.repository === 'Public'" class="inline-flex items-center rounded-full gap-1 border border-green-300 px-3 py-1 text-xs font-medium text-green-500">
                <span class="h-1 w-1 rounded-full bg-green-500"></span>
                <a :href="post.repoURL" target="_blank" >{{ post.repository }}</a>
              </span>

              <span v-else class="inline-flex items-center rounded-full gap-1 border border-red-300 px-3 py-1 text-xs font-medium text-red-500">
                <span class="h-1 w-1 rounded-full bg-red-500"></span>
                {{ post.repository }}
              </span>
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="(tech, i) in post.stack" :key="i"
                class="items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">{{
                  tech }}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Tambahan untuk efek AOS jika diperlukan */
</style>
