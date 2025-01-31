<template>
  <nav
    class="sticky top-0 max-w-full mx-auto flex items-center justify-between w-full px-8 md:px-20 py-4 bg-primary z-50 shadow-md"
  >
    <!-- class="sticky top-0 p-2 px-6 md:px-16 flex justify-between items-center bg-primary z-50 shadow-md" -->
    <div class="flex items-center">
      <img
        src="@/assets/logo-2.png"
        @click="$router.push('/')"
        alt="maven-hiring-logo"
        class="w-24 h-12 rounded-xl cursor-pointer"
      />
    </div>

    <div class="space-x-8 text-lg hidden md:flex">
      <router-link
        to="/"
        :class="[
          'text-gray-700 hover:text-blue-500 font-semibold',
          isActive('/'),
        ]"
        >Home</router-link
      >
      <router-link
        to="/about"
        :class="[
          'text-gray-700 hover:text-blue-500 font-semibold',
          isActive('/about'),
        ]"
        >About us</router-link
      >
      <router-link
        to="/contact"
        :class="[
          'text-gray-700 hover:text-blue-500 font-semibold',
          isActive('/contact'),
        ]"
        >Contact us</router-link
      >
    </div>

    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <img
        :src="
          isMenuOpen
            ? require('@/assets/svgs/crossIcon.svg')
            : require('@/assets/svgs/hamburgerIcon.svg')
        "
        alt="toggleIcon"
        class="h-6"
      />
    </button>

    <transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="z-50 absolute top-16 left-0 w-full bg-primary shadow-md md:hidden"
        ref="menu"
      >
        <router-link
          to="/"
          :class="['block px-4 py-2 hover:bg-gray-200', isActive('/')]"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/about"
          :class="['block px-4 py-2 hover:bg-gray-200', isActive('/about')]"
          @click="closeMenu"
          >About us</router-link
        >
        <router-link
          to="/contact"
          :class="['block px-4 py-2 hover:bg-gray-200', isActive('/contact')]"
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
    handleClickOutside(event) {
      if (
        this.isMenuOpen &&
        !this.$refs.menu.contains(event.target) &&
        !event.target.closest("button")
      ) {
        this.closeMenu();
      }
    },
    isActive(route) {
      return this.$route.path === route ? "text-blue-500" : "";
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
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
