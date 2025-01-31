<template>
  <section class="relative w-full home flex items-center justify-center">
    <div class="absolute inset-0">
      <img
        src="@/assets/hero-section-2.jpg"
        alt="Hero Background"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-3/5 md:h-1/2 text-center text-white px-6 bg-opacity-5 home-text"
    >
      <h1 class="text-2xl lg:text-5xl font-bold mb-4">
        Welcome to <span class="text-blue-500">Maven Hiring</span>
      </h1>
      <p class="text-white text-center max-w-5xl mx-auto">
        Maven Hiring is a boutique HR recruitment firm founded by experienced
        recruitment industry professionals, dedicated to empowering talent and
        businesses. Our team of experts has decades of combined experience in
        connecting top talent with leading organizations across various
        industries.
      </p>
    </div>
  </section>
  <section id="home" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold mb-4">
          Your Strategic Recruitment Partner
        </h2>
        <p class="mb-4">
          Are you a startup that has recently secured funding but unsure how to
          approach hiring? Perhaps you have:
        </p>
        <ul class="list-disc list-inside mb-6">
          <li>Only a few roles to fill</li>
          <li>Don't need for a full-time recruiter</li>
          <li>Questions about your recruitment strategy</li>
          <li>Challenges in your current hiring process</li>
          <li>Not have enough bandwidth to focus on hiring</li>
        </ul>
        <p class="mb-4">
          <span
            >Maven Hiring offers tailored services designed to meet your unique
            needs. We provide flexible, expert-level recruitment support that
            scales with your business. Let's discuss how we can elevate your
            hiring strategy: Email at
          </span>
          <span>
            <a
              class="inline-block text-blue-600"
              href="mailto:meena@mavenhiring.com"
              >meena@mavenhiring.com</a
            >
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.home {
  height: 490px;
}
.home-text {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
