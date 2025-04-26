<script setup>
import { ref } from 'vue';

const subject = ref('');
const email = ref('');
const message = ref('');

function sendEmail() {
  const mailto = `mailto:yanevannn03@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
    `Dari: ${email.value}\n\n${message.value}`
  )}`;
  window.location.href = mailto;
}
</script>

<template>
  <section id="contact" class="py-6 sm:py-0 px-6 min-flex items-center justify-center my-[100px]" data-aos="fade-up"
  data-aos-anchor-placement="center-bottom">
    <div class="container mx-auto max-w-7xl ">
      <div class="space-y-6">
        <div class="flex flex-col justify-center">
          <span class="text-xl font-semibold font-poppins text-gray-600 text-center">Contact</span>
          <h3 class="text-3xl font-bold font-poppins text-gray-900 leading-tight text-center">
            Feel free to contact me if any assistance is needed in the future
          </h3>
          <!-- sosmed -->
          <div class="flex gap-4 mt-6 justify-center">
            <!-- GitHub -->
            <a href="https://github.com/yanevannn" target="_blank" class="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.019c0 4.425 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.157-1.11-1.466-1.11-1.466-.909-.622.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.685-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844a9.56 9.56 0 012.5.337c1.909-1.296 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.698 1.028 1.592 1.028 2.685 0 3.847-2.339 4.695-4.566 4.943.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.481A10.019 10.019 0 0022 12.019C22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
  
            <!-- Instagram -->
            <a href="https://instagram.com/yanevannn" target="_blank" class="text-gray-600 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
  
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/yanevannn/" target="_blank" class="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5S3.88 7.5 4.98 7.5 7 6.62 7 5.5 6.12 3.5 4.98 3.5zM3.5 8h3v12h-3V8zm7.5 0h2.829v1.684h.041c.393-.744 1.353-1.684 2.789-1.684 2.982 0 3.53 1.962 3.53 4.512V20h-3v-6.285c0-1.5-.028-3.433-2.096-3.433-2.098 0-2.418 1.637-2.418 3.325V20h-3V8z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="sendEmail">
            <div class="space-y-6">
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Subject</label>
                <input v-model="subject" type="text"
                  class="block w-full h-12 border rounded-xl border-gray-400 shadow-sm px-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300"
                  placeholder="subject here">
              </div>
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Email</label>
                <input v-model="email" type="email"
                  class="block w-full h-12 border rounded-xl border-gray-400 shadow-sm px-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300"
                  placeholder="your email">
              </div>
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Message</label>
                <textarea v-model="message" rows="6"
                  class="block w-full border rounded-xl border-gray-400 shadow-sm px-4 pt-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300"
                  placeholder="message here"></textarea>
              </div>
            </div>
            <button type="submit"
              class="font-poppins font-semibold py-2 px-5 bg-gray-700 hover:bg-gray-800 hover:shadow-md  text-white rounded-full mt-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>