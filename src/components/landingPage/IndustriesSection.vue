<template>
  <div class="mx-auto p-28 custom-gradient flex flex-col items-center">
    <h1 class="text-3xl md:text-5xl">What markets do we recruit for?</h1>
    <p class="mt-4 text-lg text-center">
      With our expertise and exclusive network, we can successfully recruit in
      All Markets
    </p>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5"
    >
      <div
        v-for="(item, index) in industries"
        :key="index"
        class="flex flex-col items-center mt-10"
      >
        <img :src="item.image" class="filter grayscale w-20" alt="logo" />
        <p class="font-extrabold">{{ item.title }}</p>
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
