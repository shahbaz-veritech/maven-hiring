<template>
  <div
    class="container mx-auto px-8 md:px-24 py-8 flex items-center flex-col lg:flex-row"
  >
    <div class="p-8 w-full lg:w-1/2">
      <img src="@/assets/work-image-1.jpeg" class="rounded-3xl" />
    </div>
    <div class="w-full lg:w-1/2 lg:pl-32">
      <h1 class="text-xl lg:text-3xl mb-5">Why Work with us?</h1>
      <ul>
        <li
          class="list-disc ml-5"
          v-for="(feature, index) of features"
          :key="index"
        >
          <div>
            <p>{{ feature.title }}</p>
            <p class="font-thin text-sm text-gray-800">
              - {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="custom-box p-4 flex items-center gap-4 justify-around flex-col md:flex-row bg-primary"
  >
    <h2 class="text-white text-xl lg:text-3xl">Stay in Touch</h2>
    <form class="flex flex-col md:flex-row" @submit.prevent="subscribe">
      <div class="flex flex-col h-12">
        <input
          type="text"
          v-model="email"
          placeholder="Enter Your Email"
          class="px-4 py-2 w-60 md:w-80 border border-gray-300 focus:outline-none"
        />
        <p v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </p>
      </div>
      <button
        class="bg-black text-white px-4 py-2 hover:bg-gray-800 mt-4 md:mt-0 md:ml-4 h-10"
      >
        Subscribe
      </button>
    </form>
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
</style>

<script>
import * as yup from "yup";

export default {
  data() {
    return {
      email: "",
      error: "",
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
    async subscribe() {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email("Invalid email format")
          .required("Email is required"),
      });

      try {
        await schema.validate({ email: this.email });
        alert("Jobs alerts are added.");
        this.email = "";
        this.error = "";
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
