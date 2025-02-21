<script setup>
import Vue from '@/assets/img/vue.svg';
const year = new Date().getFullYear();

</script>

<template>
    <footer class="px-6 lg:px-6 sm:px-0">
        <div class="container mx-auto max-w-7xl py-6 text-sm  border-t-2 border-gray-800">
            <div class="text-gray-800 text-center font-poppins">
                Crafted with <a href="https://vuejs.org/" target="_blank"><img :src="Vue" alt="Vue.JS"
                        class="inline h-4"></a>
                by
                <a href="https://github.com/yanevannn" target="_blank"
                    class="font-semibold text-sky-600 hover:text-white underline underline-offset-3">Evan</a> |
                Copyright &copy; {{ year }}
            </div>
        </div>

    </footer>
</template>

<style scoped></style>