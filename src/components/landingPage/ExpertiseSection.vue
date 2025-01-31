<template>
  <div class="bg-secondry">
    <section id="services" class="py-12 max-w-7xl mx-auto px-4">
      <div class="container mx-auto">
        <h1 class="text-2xl lg:text-4xl font-bold text-center mb-3">
          Our Expertise
        </h1>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="rounded-lg hover:shadow-md p-6 bg-white"
          >
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <h4 class="font-semibold mb-2">What's included?</h4>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li v-for="item in service.included" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    title: "Contingency Search",
    description:
      "One-time fee, guaranteed. Operating on a 'no win, no fee' basis, we offer flexible, competitive candidate sourcing.",
    included: [
      "Source and screen relevant candidates",
      "Manage all candidate communication",
      "Employment guarantee for all placements",
    ],
  },
  {
    title: "Retained Search",
    description:
      "Flat monthly fee + discounted placement fee. Discover top talent exclusively with our retained search services.",
    included: [
      "Set allocation of hours each week",
      "Hire unlimited candidates each month",
      "Employment guarantee for all placements",
    ],
  },
  {
    title: "Sourcing Services",
    description:
      "One-time fee, no guarantee. Receive a list of pre-vetted candidates who have expressed interest in your role.",
    included: [
      "Tailored sourcing services",
      "Pre-vetted candidates' contact information",
      "One-time fee, regardless of hiring outcome",
    ],
  },
];
</script>
