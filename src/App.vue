<template>
  <AppNavbar />
  <router-view />
  <AppFooter />
</template>

<style>
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

const route = useRoute();

watch(
  () => route.meta.title,
  (dynamicTitle) => {
    document.title = dynamicTitle || "Maven Hiring";
  },
  { immediate: true }
);
</script>
