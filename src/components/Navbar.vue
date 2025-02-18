<script setup>
import { ref } from 'vue';
import ELogo from '@/assets/profile/logo.png';
const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
</script>

<template>
  <nav class="bg-white border-gray-200 relative">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="ELogo" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap font-poppins">Evan</span>
      </a>

      <!-- Menu untuk Desktop -->
      <ul class="hidden md:flex space-x-6 font-medium font-poppins">
        <li><a href="#" class="text-gray-900 hover:text-blue-700">Home</a></li>
        <li><a href="#" class="text-gray-900 hover:text-blue-700">About</a></li>
        <li><a href="#" class="text-gray-900 hover:text-blue-700">Project</a></li>
        <li><a href="#" class="text-gray-900 hover:text-blue-700">Services</a></li>
        <li><a href="#" class="text-gray-900 hover:text-blue-700">Contact</a></li>
      </ul>

      <!-- Tombol Hamburger (Hanya muncul di Mobile) -->
      <button @click="toggleMenu" type="button" class="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Menu Mobile (Hanya muncul jika tombol ditekan) -->
      <transition name="menu">
        <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul class="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50">
            <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Home</a></li>
            <li><a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100">About</a></li>
            <li><a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100">Project</a></li>
            <li><a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100">Services</a></li>
            <li><a href="#" class="block py-2 px-3 text-gray-900 hover:bg-gray-100">Contact</a></li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.menu-enter-active, .menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-enter-from, .menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.menu-enter-to, .menu-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>