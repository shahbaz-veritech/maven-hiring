<template>
  <section class="relative w-full home flex items-center justify-center">
    <div class="absolute inset-0">
      <img
        src="@/assets/hero-section-bg.jpg"
        alt="Hero Background"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-3/5 md:h-1/2 text-center text-white px-6 bg-opacity-5 home-text"
    >
      <h1 class="text-2xl lg:text-5xl font-bold mb-4">
        Welcome to Maven Hiring
      </h1>
      <p class="text-white text-center max-w-5xl mx-auto">
        Maven Hiring LLC is a boutique HR recruitment firm founded by
        experienced recruitment industry professionals, dedicated to empowering
        talent and businesses. Our team of experts has decades of combined
        experience in connecting top talent with leading organizations across
        various industries.
      </p>
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
