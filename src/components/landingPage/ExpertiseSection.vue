<template>
  <div class="mx-auto p-12 md:p-24">
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-5xl">Our Expertise</h1>
      <p class="mt-4 text-lg text-gray-600">
        With extensive experience in recruitment, staffing and business
        consulting, our team excels in
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
    >
      <div
        v-for="item in expertise"
        :key="item.id"
        class="flex flex-col items-center text-center p-6"
      >
        <img :src="item.image" alt="icon" class="w-16 h-16 mb-4" />
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-600 mt-2">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseSection",
  data() {
    return {
      expertise: [
        {
          id: 101,
          title: "Executive Search",
          image: require("@/assets/expertise/building.png"),
          description:
            "Connecting you with top-tier executives to lead your organization to success.",
        },
        {
          id: 102,
          title: "Contingency Recruitment",
          image: require("@/assets/expertise/founder.png"),
          description:
            "Delivering skilled candidates quickly to meet your urgent hiring needs.",
        },
        {
          id: 103,
          title: "Permanent Placement",
          image: require("@/assets/expertise/job-offer.png"),
          description:
            "Securing the best permanent talent to drive long-term growth for your company.",
        },
        {
          id: 104,
          title: "Temporary & Contract Staffing",
          image: require("@/assets/expertise/contingency.png"),
          description:
            "Providing flexible staffing solutions to meet your short-term and project-based requirements.",
        },
        {
          id: 105,
          title: "HR Consulting",
          image: require("@/assets/expertise/consultation.png"),
          description:
            "Offering strategic HR guidance to enhance your organizational effectiveness.",
        },
        {
          id: 106,
          title: "Talent Management",
          image: require("@/assets/expertise/talent-management.png"),
          description:
            "Helping you develop and retain the best talent to sustain your competitive edge.",
        },
      ],
    };
  },
};
</script>
