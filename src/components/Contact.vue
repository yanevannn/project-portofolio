<script setup>

</script>

<template>
  <section class="py-6 sm:py-0 px-6 min-flex items-center justify-center my-[100px]">
    <div class="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10">
      <div class="space-y-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div>
          <span class="text-xl font-semibold font-poppins text-gray-600">Contact</span>
          <h3 class="text-3xl font-bold font-poppins text-gray-900 leading-tight">
            Feel free to contact me if any assistance is needed in the future
          </h3>
        </div>
        <div>
          <form action="" method="POST">
            <div class="space-y-6">
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Name</label>
                <input type="text" class="block w-full h-12 border rounded-xl border-gray-400 shadow-sm px-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300" placeholder="name">
              </div>
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Email</label>
                <input type="email" class="block w-full h-12 border rounded-xl border-gray-400 shadow-sm px-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300" placeholder="email">
              </div>
              <div>
                <label class="block text-base font-medium font-poppins text-gray-700 mb-2">Message</label>
                <textarea rows="4" class="block w-full border rounded-xl border-gray-400 shadow-sm px-4 pt-4 focus:outline-none text-gray-700 text-base placeholder:text-gray-300" placeholder="message"></textarea>
              </div>
            </div>
            <button type="submit" class="font-poppins font-bold py-3 px-6 bg-gray-700 hover:bg-gray-800 text-white rounded-full mt-5">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div class="rounded-md items-center justify-center hidden sm:flex md:hidden lg:flex" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img src="https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/6070b0658f4803368fde5a9e_freelance-web-developer-at-work.jpeg" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>