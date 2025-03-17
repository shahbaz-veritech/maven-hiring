<template>
  <div class="bg-primary z-50 shadow-md sticky top-0">
    <nav class="max-w-7xl mx-auto flex items-center justify-between w-full p-4">
      <div class="flex items-center">
        <img
          src="@/assets/maven-hiring-logo.png"
          @click="$router.push('/')"
          alt="maven-hiring-logo"
          class="w-12 h-12 rounded-xl cursor-pointer"
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
          to="/about-meena"
          :class="[
            'text-gray-700 hover:text-blue-500 font-semibold',
            isActive('/about-meena'),
          ]"
          >About</router-link
        >
        <router-link
          to="/services"
          :class="[
            'text-gray-700 hover:text-blue-500 font-semibold',
            isActive('/services'),
          ]"
          >Services</router-link
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
            to="/about-meena"
            :class="[
              'block px-4 py-2 hover:bg-gray-200',
              isActive('/about-meena'),
            ]"
            @click="closeMenu"
            >About us</router-link
          >
          <router-link
            to="/services"
            :class="[
              'text-gray-700 hover:text-blue-500 font-semibold',
              isActive('/services'),
            ]"
            >Services</router-link
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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    closeMenu();
  }
};

const isActive = (path) => {
  return route.path === path ? "!text-blue-500" : "";
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
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
