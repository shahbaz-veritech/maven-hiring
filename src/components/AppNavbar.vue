<template>
  <nav
    class="shadow-md p-5 md:px-16 flex justify-between items-center bg-primary border-b border-gray-300 relative"
  >
    <div class="flex items-center">
      <img
        src="@/assets/logo-2.png"
        alt="maven-hiring-logo"
        class="w-32 rounded-xl"
      />
    </div>

    <div class="space-x-8 text-lg hidden md:flex">
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
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <img
        src="@/assets/svgs/hamburgerIcon.svg"
        alt="hamburgerIcon"
        class="h-6"
      />
    </button>

    <transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="z-50 absolute top-24 left-0 w-full bg-primary shadow-md md:hidden"
      >
        <router-link
          to="/"
          class="block px-4 py-2 text-blue-500 hover:bg-gray-200"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="block px-4 py-2 text-blue-500 hover:bg-gray-200"
          @click="closeMenu"
          >About us</router-link
        >
        <router-link
          to="/contact"
          class="block px-4 py-2 text-blue-500 hover:bg-gray-200"
          @click="closeMenu"
          >Contact us</router-link
        >
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
