<template>
  <ServiceSection />
  <ExpertiseSection />
  <div class="custom-box">
    <div
      class="max-w-7xl mx-auto p-4 flex items-center gap-4 justify-between flex-col"
    >
      <h2 class="text-white text-xl font-bold lg:text-4xl">
        Reach out to us and start your hiring journey today.
      </h2>
      <button
        class="bg-black text-white px-4 py-2 hover:bg-gray-800 mt-4 rounded"
      >
        <router-link
          to="/contact"
          class="text-gray-300 hover:text-white font-semibold"
          >Get Started</router-link
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ExpertiseSection, ServiceSection } from "@/components/landingPage";
</script>

<style scoped>
.custom-box {
  background: linear-gradient(
    254deg,
    rgb(185, 43, 39) 0%,
    rgb(21, 101, 192) 100%
  );
}
</style>
