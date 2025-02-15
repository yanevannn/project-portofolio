<script setup>
import laravel from '@/assets/img/laravel.svg';
import tailwindcss from '@/assets/img/tailwindcss.svg';
import nginx from '@/assets/img/nginx.svg';
import nodejs from '@/assets/img/nodejs.svg';
import git from '@/assets/img/git.svg';
import mySQL from '@/assets/img/mysql.svg';
import vscode from '@/assets/img/vscode.svg';
import avatar from '@/assets/profile/yanevannn.png';

</script>

<template>
  <!-- HERO -->
  <section id="home" class="relative w-full min-h-screen flex items-center justify-center bg-gray-100 px-6">
    <div class="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex items-center justify-center h-full order-2 lg:order-1">
        <div class="text-center lg:text-left">
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-poppins">
            Web Developer <br /> & Tech Enthusiast
          </h3>
          <p class="mt-4 text-base sm:text-lg text-gray-600 font-mulish">
            Hello, I'm Evan—a passionate Web Developer and Programmer from Bali, Indonesia.
            I specialize in building efficient, responsive, and user-friendly websites.
          </p>
          <div class="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <img class="h-8 sm:h-10" :src="laravel" alt="Laravel" />
            <img class="h-8 sm:h-10" :src="tailwindcss" alt="Tailwind CSS" />
            <img class="h-8 sm:h-10" :src="nginx" alt="Nginx" />
            <img class="h-8 sm:h-10" :src="nodejs" alt="Node.js" />
            <img class="h-8 sm:h-10" :src="mySQL" alt="MySQL" />
            <img class="h-8 sm:h-10" :src="git" alt="Git" />
            <img class="h-8 sm:h-10" :src="vscode" alt="VS Code" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center order-1 lg:order-2">
        <div class="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
          <img :src="avatar" alt="Photo Profile" class="max-w-full h-auto"/>
        </div>
      </div>
    </div>
  </section>
  <!-- /HERO -->

</template>

<style scoped>
</style>
