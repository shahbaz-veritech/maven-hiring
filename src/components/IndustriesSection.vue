<template>
  <div
    class="container mx-auto p-20 custom-gradient flex flex-col items-center"
  >
    <h1 class="text-3xl md:text-5xl">Our Industries</h1>
    <p class="mt-4 text-lg">
      We serve a diverse range of industries, including:
    </p>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6"
    >
      <div
        v-for="(item, index) in industries"
        :key="index"
        class="flex flex-col items-center mt-10 gap-4"
      >
        <img :src="item.image" class="filter grayscale w-20" alt="logo" />
        <p class="font-bold">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-gradient {
  background: linear-gradient(
    180deg,
    rgb(143, 154, 194) 0%,
    rgb(249, 249, 249) 100%
  );
  margin-top: 0;
  margin-bottom: 0;
}
</style>
<script>
export default {
  name: "IndustriesSection",
  data() {
    return {
      industries: [
        {
          title: "Technology",
          image: require("@/assets/industries/nanotechnology.png"),
        },
        {
          title: "Healthcare",
          image: require("@/assets/industries/medical-team.png"),
        },
        {
          title: "Finance",
          image: require("@/assets/industries/financial-profit.png"),
        },
        {
          title: "Manufacturing",
          image: require("@/assets/industries/manufacture.png"),
        },
        {
          title: "Professional Services",
          image: require("@/assets/industries/togetherness.png"),
        },
        {
          title: "Non-Profit",
          image: require("@/assets/industries/donation.png"),
        },
      ],
    };
  },
};
</script>
