<template>
  <nav
    class="shadow-md p-5 px-16 flex flex-col md:flex-row justify-between items-center bg-primary"
  >
    <div class="flex items-center">
      <img
        src="@/assets/propelmindz-logo.png"
        alt="PropelMindz Logo"
        class="h-20"
      />
    </div>

    <div class="space-x-8 flex text-lg">
      <router-link to="/" class="text-gray-700 hover:text-blue-500"
        >Home</router-link
      >
      <router-link to="/about" class="text-gray-700 hover:text-blue-500"
        >About us</router-link
      >
      <router-link to="/contact" class="text-gray-700 hover:text-blue-500"
        >Contact us</router-link
      >
    </div>
  </nav>
</template>
