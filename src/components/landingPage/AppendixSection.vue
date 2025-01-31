<template>
  <div class="mx-auto p-12 bg-secondry">
    <div class="text-center mb-10">
      <!-- <h1 class="text-2xl lg:text-4xl font-bold text-center mb-3">Appendix</h1> -->
      <p class="text-lg text-gray-600 text-center mx-auto">
        With extensive experience in recruitment, staffing and business
        consulting, our team excels in
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
    >
      <div
        v-for="item in expertise"
        :key="item.id"
        class="flex flex-col items-center text-center p-6 hover:shadow-lg rounded-lg bg-white min-h-64"
      >
        <img :src="item.image" alt="icon" class="w-16 h-16 mb-4" />
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-gray-600 mt-2">
          <span>{{
            item.showFull
              ? item.description
              : item.description.slice(0, 100) +
                (item.description.length > 100 ? "..." : "")
          }}</span>
          <span>
            <button
              v-if="item.description.length > 100"
              @click="toggleShowMore(item)"
              class="text-blue-500 underline"
            >
              {{ item.showFull ? "Show Less" : "Show More" }}
            </button></span
          >
        </p>
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
          showFull: false,
        },
        {
          id: 102,
          title: "On Demand - Contingency Recruitment",
          image: require("@/assets/expertise/founder.png"),
          description:
            "On demand talent acquisition for hyper growth startups. Our expert team connects you with top-tier Go-to-Market (GTM) professionals through flexible and efficient recruiting solutions. Whether you need an exclusive retained search, contingency recruiting, or a curated list of pre-vetted candidates, we provide the talent you need to drive your company's rapid growth and success. Partner with us to build a world-class team that scales with your ambitions.",
          showFull: false,
        },
        {
          id: 103,
          title: "Permanent Placement",
          image: require("@/assets/expertise/job-offer.png"),
          description:
            "Securing the best permanent talent to drive long-term growth for your company.",
          showFull: false,
        },
        {
          id: 104,
          title: "Temporary & Contract Staffing",
          image: require("@/assets/expertise/contingency.png"),
          description:
            "Providing flexible staffing solutions to meet your short-term and project-based requirements.",
          showFull: false,
        },
        {
          id: 105,
          title: "HR Consulting",
          image: require("@/assets/expertise/consultation.png"),
          description:
            "Offering strategic HR guidance to enhance your organizational effectiveness.",
          showFull: false,
        },
        {
          id: 106,
          title: "Talent Management",
          image: require("@/assets/expertise/talent-management.png"),
          description:
            "Helping you develop and retain the best talent to sustain your competitive edge.",
          showFull: false,
        },
      ],
    };
  },
  methods: {
    toggleShowMore(item) {
      item.showFull = !item.showFull;
    },
  },
};
</script>
