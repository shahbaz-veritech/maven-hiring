<template>
  <div class="bg-secondry">
    <section id="services" class="py-12 max-w-7xl mx-auto px-4">
      <div class="container mx-auto">
        <h1 class="text-2xl lg:text-4xl font-bold text-center mb-3">
          Best in class candidates, <br />on demand.
        </h1>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="rounded-lg hover:shadow-md p-6 bg-white min-h-[410px] max-h-fit transition-all duration-300 flex flex-col"
          >
            <h3 class="text-3xl font-semibold mb-4 bg-red h-12">
              {{ service.title }}
            </h3>
            <h4 class="mt-3 mb-8 text-lg bg-green h-12">
              {{ service.subtitle }}
            </h4>
            <p class="text-gray-600 mb-4 bg-blue h-44 xl:h-40">
              {{ service.description }}
            </p>

            <div class="border-y border-3 py-2 border-black">
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleFaq(index)"
              >
                <h4 class="font-semibold">What's included?</h4>
                <IconifyIcon
                  :icon="
                    service.isOpen ? 'tabler:chevron-up' : 'tabler:chevron-down'
                  "
                  height="20"
                />
              </div>

              <div
                class="transition-all duration-300 overflow-hidden"
                :style="{ maxHeight: service.isOpen ? '300px' : '0px' }"
              >
                <ul class="list-inside text-sm text-gray-600 mt-3">
                  <li
                    v-for="(item, i) in service.included"
                    :key="i"
                    class="py-1"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Contingency Search",
    subtitle: "One-time fee, guaranteed",
    description:
      "Operating on a 'no win, no fee' basis, we offer flexible, competitive candidate sourcing. From initial interviews to final decisions, we guide clients through the hiring process, delivering tailored solutions for their organizational needs.",
    included: [
      "Source and screen candidates that are relevant to your team’s hiring needs",
      "Manage all candidate communication with your team as well as all recruiting coordination",
      "We guarantee all placements with an employment guarantee.",
    ],
  },
  {
    title: "Retained Search",
    subtitle: "Flat monthly fee + discounted placement fee",
    description:
      "Discover top talent exclusively with our retained search services. Clients invest upfront for our dedicated attention and industry expertise, ensuring a seamless journey from candidate search to successful onboarding.",
    included: [
      "Set allocation of hours each week to focus solely on your team’s hiring needs.",
      "Hire unlimited candidates each month with a reduced placement fee.",
      "We guarantee all placements with an employment guarantee.",
    ],
  },
  {
    title: "Sourcing Services",
    subtitle: "One time fee no guarantee",
    description:
      "For a flat fee, receive a list of pre-vetted candidates who have expressed interest in your role. This service saves you time by providing quality leads while you manage the interview and hiring process.",
    included: [
      "Tailored sourcing services, based on your teams immediate need",
      "Pay for a set number of active candidates contact information that have been vetted for your role and expressed interest in your team",
      "One time fee, regardless of who you hire or how many you hire.",
    ],
  },
]);

const toggleFaq = (index) => {
  services.value[index].isOpen = !services.value[index].isOpen;
};
</script>
