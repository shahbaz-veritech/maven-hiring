<template>
  <div
    class="min-h-[90dvh] bg-cover bg-center bg-no-repeat feature__preview mx-auto px-8 md:px-24 py-8"
  >
    <div class="max-w-7xl mx-auto px-4 flex items-center flex-col lg:flex-row">
      <div class="py-8 w-full lg:w-1/2">
        <img src="@/assets/work-image-1.jpeg" class="rounded-3xl" />
      </div>
      <div class="w-full lg:w-1/2 lg:pl-32">
        <h1 class="text-2xl lg:text-4xl font-bold mb-5">Why Work with us?</h1>
        <ul>
          <li
            class="list-disc ml-5"
            v-for="(feature, index) of features"
            :key="index"
          >
            <div>
              <p class="text-gray-800 font-semibold leading-5 text-base">
                {{ feature.title }}
              </p>
              <p class="text-sm text-gray-600">{{ feature.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="custom-box">
    <div
      class="max-w-7xl mx-auto p-4 flex items-center gap-4 justify-between flex-col md:flex-row"
    >
      <h2 class="text-white text-xl font-bold lg:text-4xl">Stay in Touch</h2>
      <form class="flex flex-row" @submit.prevent="subscribe">
        <div class="flex flex-col">
          <input
            type="email"
            v-model="email"
            required
            placeholder="Enter Your Email"
            class="px-4 py-2 w-52 md:w-80 border border-gray-300 focus:outline-none"
          />
        </div>
        <button class="bg-black text-white px-4 py-2 hover:bg-gray-800 mt-0">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-box {
  background: linear-gradient(
    254deg,
    rgb(185, 43, 39) 0%,
    rgb(21, 101, 192) 100%
  );
}
.feature__preview {
  background-image: url("https://cdn.prod.website-files.com/66a5de2d68f9fcecf7c1bf04/66f67a23f993f27fdc12d2fe_grid%20background.svg");
}
</style>

<script>
export default {
  data() {
    return {
      email: "",
      features: [
        {
          title: "Zero Cost Upfront",
          description:
            "No upfront payment, you only pay us when you successfully hire a candidate profile shared by us.",
        },
        {
          title: "We Move Fast",
          description:
            "Takes us on average ~ 2 weeks to successfully fill a role.",
        },
        {
          title: "Experts in Every Market",
          description:
            "Our extensive network has recruiters who are experts in every market who stay on top of the latest data and trends.",
        },
        {
          title: "We Are A Full Service Strategic Partner",
          description:
            "Whether it is optimizing your job description, managing the interview process and or assisting with negotiations, we will be there with you every step of the way!",
        },
        {
          title: "Tailor Made Services",
          description:
            "We work on client first approach; each client is different and our services are tailor made to fit the client need.",
        },
      ],
    };
  },
  methods: {
    subscribe() {
      console.log(this.email);
    },
  },
};
</script>
