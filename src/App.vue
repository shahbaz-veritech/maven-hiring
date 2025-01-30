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
<script>
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>
