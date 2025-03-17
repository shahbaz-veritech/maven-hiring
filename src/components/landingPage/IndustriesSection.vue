<template>
  <div
    class="bg-cover bg-center bg-no-repeat feature__preview min-h-[40vh] py-12"
  >
    <div class="max-w-7xl mx-auto flex flex-col items-center px-4">
      <h1 class="text-2xl lg:text-4xl font-bold text-center">
        What markets do we recruit for?
      </h1>
      <p class="my-4 mb-6 text-lg text-gray-600 text-center">
        With our expertise and exclusive network, we can successfully recruit in
        All Markets
      </p>
      <div class="w-full flex flex-wrap justify-center gap-2">
        <div
          v-for="(item, index) in industries"
          :key="index"
          class="flex flex-col items-center mb-2 hover:shadow-lg hover:bg-white rounded-md w-44 py-4 px-10"
        >
          <img :src="item.image" class="w-20" alt="logo" />
          <p
            class="text-center text-gray-800 font-semibold leading-5 text-base mt-2"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const industries = ref([
  {
    title: "Tech/IT",
    image: require("@/assets/industries/nanotechnology.png"),
  },
  {
    title: "Enginnering",
    image: require("@/assets/industries/engineering.png"),
  },
  {
    title: "Manufacturing",
    image: require("@/assets/industries/manufacture.png"),
  },
  {
    title: "Healthcare",
    image: require("@/assets/industries/medical-team.png"),
  },
  {
    title: "Banking and Finance",
    image: require("@/assets/industries/financial-profit.png"),
  },
  {
    title: "Marketing and Media",
    image: require("@/assets/industries/togetherness.png"),
  },
  {
    title: "Insurance",
    image: require("@/assets/industries/insurance.png"),
  },
  {
    title: "Retail",
    image: require("@/assets/industries/retail.png"),
  },
  {
    title: "Non-Profit",
    image: require("@/assets/industries/donation.png"),
  },
]);
</script>

<style scoped>
.feature__preview {
  background-image: url("https://cdn.prod.website-files.com/66a5de2d68f9fcecf7c1bf04/66f67a23f993f27fdc12d2fe_grid%20background.svg");
}
</style>
