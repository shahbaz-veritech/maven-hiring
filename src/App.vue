<template>
  <AppNavbar />
  <router-view />
</template>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
  },
};
</script>
