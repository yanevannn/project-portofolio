<script setup>
import laravel from '@/assets/img/laravel.svg';
import tailwindcss from '@/assets/img/tailwindcss.svg';
import nginx from '@/assets/img/nginx.svg';
import nodejs from '@/assets/img/nodejs.svg';
import git from '@/assets/img/git.svg';
import mySQL from '@/assets/img/mysql.svg';
import vscode from '@/assets/img/vscode.svg';
import avatar from '@/assets/profile/yanevannn.png';
import gcp from '@/assets/img/gcp.svg';
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';

const typedElement = ref(null);

onMounted(() => {
  setTimeout(() => {
    new Typed(typedElement.value, {
      strings: [
        "Hello, I'm Evan—a passionate Web Developer and Programmer from Bali, Indonesia. I specialize in building efficient, responsive, and user-friendly websites.",
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
    });
  }, 2000); // Delay 1.5 detik agar tidak bertabrakan dengan preloader

});

</script>

<template>
  <!-- HERO -->
  <section id="home" class="relative w-full min-h-screen flex items-center justify-center bg-gray-100 px-6">
    <div class="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex items-center justify-center lg:justify-start h-full order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
        <div class="text-center lg:text-left">
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-poppins">
            Web Developer <br /> & Tech Enthusiast
          </h3>
          <p class="mt-4 text-base sm:text-lg text-gray-600 font-mulish">
            <span ref="typedElement"></span>
          </p>
          <div class="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="laravel" alt="Laravel" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="tailwindcss" alt="Tailwind CSS" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="nginx" alt="Nginx" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="gcp" alt="Google Cloud Platform" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="nodejs" alt="Node.js" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="mySQL" alt="MySQL" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="git" alt="Git" />
            <img class="h-8 sm:h-10 transition-transform duration-300 hover:scale-110" :src="vscode" alt="VS Code" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
        <div class="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg avatar-image">
          <img :src="avatar" alt="Photo Profile" class="max-w-full h-auto"/>
        </div>
      </div>
    </div>
  </section>
  <!-- /HERO -->

</template>

<style scoped>
.avatar-image {
    outline: 20px solid #c9c8c84d;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: center;
    animation: morph 8s ease-in-out infinite;
    background-blend-mode: multiply;
    box-shadow: inset 0px 0px 0px 18px #ffffff4d;
}

.avatar-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@keyframes morph {
	 0% {
		 border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
	}
	 50% {
		 border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
	}
	 100% {
		 border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
	}
}
</style>
