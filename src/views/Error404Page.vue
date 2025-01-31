<template>
  <div class="flex justify-center items-center py-24 px-8 bg-primary">
    <div class="text-center">
      <h1 class="text-2xl md:text-4xl font-bold text-red-500">
        404 - Page Not Found
      </h1>
      <p class="mt-4 text-lg md:text-xl">
        Oops! The page you are looking for does not exist.
      </p>
      <router-link
        to="/"
        class="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400"
      >
        Go to Home Page
      </router-link>
    </div>
  </div>
</template>
