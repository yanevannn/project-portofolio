<script setup>
import cv from "@/assets/document/cv-evan.pdf"
function openCv() {
  window.open(cv, "_blank");
}
import me from "@/assets/img/me.jpg";
</script>

<template>
    <div class="section py-6 sm:py-0 px-6 min-h-screen flex items-center justify-center" id="about">
        <div class="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
            <div class="left flex items-center justify-center">
                <div class="image ">
                    <img :src=me
                        class="w-full h-auto rounded-xl hidden md:block" />
                </div>
            </div>

            <div class="right flex flex-col justify-center lg:pl-10">
                <div class="title">
                    <span class="text-xl font-semibold font-poppins text-gray-600">About Me</span>
                    <h3 class="text-3xl font-bold font-poppins text-gray-900 leading-tight">
                        Web Developer: Eager to Learn & Contribute
                    </h3>
                    <img :src=me
                    class="w-full h-auto rounded-xl block md:hidden my-5" />
                </div>
                <div class="text mt-4">
                    <p class="text-base font-mulish text-gray-700 leading-relaxed text-justify">
                        I am a recent graduate from ITB STIKOM Bali with a degree in
                        Information Systems. Passionate about web development, I specialize
                        in building and managing scalable applications. My expertise
                        includes Laravel for backend development, Tailwind CSS for modern UI
                        styling, and Nginx for server configuration. I also have experience
                        managing cloud infrastructure using Google Cloud Platform, handling
                        databases with MySQL, and working with Node.js for backend
                        services. Additionally, I use Git for version control and VS Code as
                        my preferred code editor. I am always eager to learn new technologies
                        and contribute to innovative projects.
                    </p>
                </div>
                <div class="button mt-6 flex gap-2">
                  <button @click="openCv" class="bg-gray-700 hover:bg-gray-800 hover:shadow-md  text-white font-poppins font-semibold py-2 px-5 rounded-full transition duration-300 ">Download CV</button>
                  <button class=" text-gray-700 border hover:shadow-md font-poppins font-semibold py-2 px-5 rounded-full transition duration-300 "><a href="#contact">Contact Me</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
